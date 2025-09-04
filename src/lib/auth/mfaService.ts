import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import { authenticator } from 'otplib';

const prisma = new PrismaClient();

export interface MFASecret {
  id: string;
  userId: string;
  secret: string;
  backupCodes: string[];
  isEnabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MFASetupResult {
  secret: string;
  qrCodeUrl: string;
  backupCodes: string[];
}

export class MFAService {
  /**
   * Generate a new MFA secret for a user
   */
  async generateSecret(userId: string): Promise<MFASetupResult> {
    try {
      // Generate a new secret
      const secret = authenticator.generateSecret();
      
      // Generate backup codes
      const backupCodes = this.generateBackupCodes();
      
      // Create or update MFA record
      await prisma.mFASecret.upsert({
        where: { userId },
        update: {
          secret,
          backupCodes,
          isEnabled: false,
          updatedAt: new Date()
        },
        create: {
          userId,
          secret,
          backupCodes,
          isEnabled: false
        }
      });

      // Generate QR code URL for authenticator apps
      const qrCodeUrl = authenticator.keyuri(
        userId,
        'El-Mag Insurance Portal',
        secret
      );

      return {
        secret,
        qrCodeUrl,
        backupCodes
      };
    } catch (error) {
      console.error('Error generating MFA secret:', error);
      throw new Error('Failed to generate MFA secret');
    }
  }

  /**
   * Verify TOTP token
   */
  async verifyToken(userId: string, token: string): Promise<boolean> {
    try {
      const mfaRecord = await prisma.mFASecret.findUnique({
        where: { userId }
      });

      if (!mfaRecord || !mfaRecord.isEnabled) {
        return false;
      }

      // Verify the token
      return authenticator.verify({
        token,
        secret: mfaRecord.secret
      });
    } catch (error) {
      console.error('Error verifying MFA token:', error);
      return false;
    }
  }

  /**
   * Verify backup code
   */
  async verifyBackupCode(userId: string, backupCode: string): Promise<boolean> {
    try {
      const mfaRecord = await prisma.mFASecret.findUnique({
        where: { userId }
      });

      if (!mfaRecord || !mfaRecord.isEnabled) {
        return false;
      }

      // Check if backup code exists and remove it after use
      const codeIndex = mfaRecord.backupCodes.indexOf(backupCode);
      if (codeIndex === -1) {
        return false;
      }

      // Remove used backup code
      const updatedBackupCodes = mfaRecord.backupCodes.filter(
        (_, index) => index !== codeIndex
      );

      await prisma.mFASecret.update({
        where: { userId },
        data: {
          backupCodes: updatedBackupCodes,
          updatedAt: new Date()
        }
      });

      return true;
    } catch (error) {
      console.error('Error verifying backup code:', error);
      return false;
    }
  }

  /**
   * Enable MFA for a user
   */
  async enableMFA(userId: string): Promise<void> {
    try {
      await prisma.mFASecret.update({
        where: { userId },
        data: {
          isEnabled: true,
          updatedAt: new Date()
        }
      });
    } catch (error) {
      console.error('Error enabling MFA:', error);
      throw new Error('Failed to enable MFA');
    }
  }

  /**
   * Disable MFA for a user
   */
  async disableMFA(userId: string): Promise<void> {
    try {
      await prisma.mFASecret.update({
        where: { userId },
        data: {
          isEnabled: false,
          updatedAt: new Date()
        }
      });
    } catch (error) {
      console.error('Error disabling MFA:', error);
      throw new Error('Failed to disable MFA');
    }
  }

  /**
   * Generate new backup codes
   */
  async regenerateBackupCodes(userId: string): Promise<string[]> {
    try {
      const newBackupCodes = this.generateBackupCodes();
      
      await prisma.mFASecret.update({
        where: { userId },
        data: {
          backupCodes: newBackupCodes,
          updatedAt: new Date()
        }
      });

      return newBackupCodes;
    } catch (error) {
      console.error('Error regenerating backup codes:', error);
      throw new Error('Failed to regenerate backup codes');
    }
  }

  /**
   * Check if MFA is enabled for a user
   */
  async isMFAEnabled(userId: string): Promise<boolean> {
    try {
      const mfaRecord = await prisma.mFASecret.findUnique({
        where: { userId }
      });

      return mfaRecord?.isEnabled || false;
    } catch (error) {
      console.error('Error checking MFA status:', error);
      return false;
    }
  }

  /**
   * Get MFA status for a user
   */
  async getMFAStatus(userId: string): Promise<{
    isEnabled: boolean;
    backupCodesRemaining: number;
    lastUpdated: Date | null;
  }> {
    try {
      const mfaRecord = await prisma.mFASecret.findUnique({
        where: { userId }
      });

      if (!mfaRecord) {
        return {
          isEnabled: false,
          backupCodesRemaining: 0,
          lastUpdated: null
        };
      }

      return {
        isEnabled: mfaRecord.isEnabled,
        backupCodesRemaining: mfaRecord.backupCodes.length,
        lastUpdated: mfaRecord.updatedAt
      };
    } catch (error) {
      console.error('Error getting MFA status:', error);
      throw new Error('Failed to get MFA status');
    }
  }

  /**
   * Generate backup codes
   */
  private generateBackupCodes(): string[] {
    const codes: string[] = [];
    for (let i = 0; i < 10; i++) {
      // Generate 8-character alphanumeric codes
      const code = crypto.randomBytes(4).toString('hex').toUpperCase();
      codes.push(code);
    }
    return codes;
  }

  /**
   * Validate TOTP token format
   */
  static validateToken(token: string): boolean {
    // TOTP tokens are typically 6 digits
    return /^\d{6}$/.test(token);
  }

  /**
   * Validate backup code format
   */
  static validateBackupCode(code: string): boolean {
    // Backup codes are 8-character hexadecimal
    return /^[0-9A-F]{8}$/.test(code);
  }
}

export default MFAService;
