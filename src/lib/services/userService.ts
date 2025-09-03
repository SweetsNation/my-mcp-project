import { prisma } from '../database/client';
import { PasswordService } from '../auth/password';
import { JWTService } from '../auth/jwt';

export interface CreateUserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  dateOfBirth?: Date;
  medicareNumber?: string;
  memberNumber?: string;
  planType?: string;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  dateOfBirth?: Date;
  medicareNumber?: string;
  memberNumber?: string;
  planType?: string;
  isActive: boolean;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
}

export class UserService {
  /**
   * Create a new user account
   */
  static async createUser(userData: CreateUserData): Promise<UserProfile> {
    try {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: userData.email },
      });

      if (existingUser) {
        throw new Error('User with this email already exists');
      }

      // Validate password strength
      const passwordValidation = PasswordService.validatePassword(userData.password);
      if (!passwordValidation.isValid) {
        throw new Error(`Password validation failed: ${passwordValidation.errors.join(', ')}`);
      }

      // Hash password
      const passwordHash = await PasswordService.hashPassword(userData.password);

      // Create user
      const user = await prisma.user.create({
        data: {
          email: userData.email,
          passwordHash,
          firstName: userData.firstName,
          lastName: userData.lastName,
          phone: userData.phone,
          dateOfBirth: userData.dateOfBirth,
          medicareNumber: userData.medicareNumber,
          memberNumber: userData.memberNumber,
          planType: userData.planType,
        },
      });

      // Return user profile (without password)
      const { passwordHash: _, ...userProfile } = user;
      return userProfile as UserProfile;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Authenticate user login
   */
  static async authenticateUser(loginData: UserLoginData): Promise<{
    user: UserProfile;
    token: string;
    refreshToken: string;
  }> {
    try {
      // Find user by email
      const user = await prisma.user.findUnique({
        where: { email: loginData.email },
      });

      if (!user) {
        throw new Error('Invalid email or password');
      }

      if (!user.isActive) {
        throw new Error('Account is deactivated');
      }

      // Verify password
      const isPasswordValid = await PasswordService.verifyPassword(
        loginData.password,
        user.passwordHash
      );

      if (!isPasswordValid) {
        throw new Error('Invalid email or password');
      }

      // Update last login
      await prisma.user.update({
        where: { id: user.id },
        data: { lastLogin: new Date() },
      });

      // Generate tokens
      const token = JWTService.generateToken(user.id, user.email);
      const refreshToken = JWTService.generateRefreshToken(user.id, user.email);

      // Store refresh token in database
      await prisma.userSession.create({
        data: {
          userId: user.id,
          tokenHash: refreshToken, // In production, hash this token
          expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        },
      });

      // Return user profile and tokens
      const { passwordHash: _, ...userProfile } = user;
      return {
        user: userProfile as UserProfile,
        token,
        refreshToken,
      };
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get user profile by ID
   */
  static async getUserById(userId: string): Promise<UserProfile | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        return null;
      }

      const { passwordHash: _, ...userProfile } = user;
      return userProfile as UserProfile;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update user profile
   */
  static async updateUser(userId: string, updateData: Partial<CreateUserData>): Promise<UserProfile> {
    try {
      // Remove password from update data if present
      const { password, ...profileData } = updateData;

      const user = await prisma.user.update({
        where: { id: userId },
        data: profileData,
      });

      const { passwordHash: _, ...userProfile } = user;
      return userProfile as UserProfile;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Change user password
   */
  static async changePassword(userId: string, currentPassword: string, newPassword: string): Promise<void> {
    try {
      // Get current user
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new Error('User not found');
      }

      // Verify current password
      const isCurrentPasswordValid = await PasswordService.verifyPassword(
        currentPassword,
        user.passwordHash
      );

      if (!isCurrentPasswordValid) {
        throw new Error('Current password is incorrect');
      }

      // Validate new password
      const passwordValidation = PasswordService.validatePassword(newPassword);
      if (!passwordValidation.isValid) {
        throw new Error(`Password validation failed: ${passwordValidation.errors.join(', ')}`);
      }

      // Hash new password
      const newPasswordHash = await PasswordService.hashPassword(newPassword);

      // Update password
      await prisma.user.update({
        where: { id: userId },
        data: { passwordHash: newPasswordHash },
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Deactivate user account
   */
  static async deactivateUser(userId: string): Promise<void> {
    try {
      await prisma.user.update({
        where: { id: userId },
        data: { isActive: false },
      });
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete user account
   */
  static async deleteUser(userId: string): Promise<void> {
    try {
      await prisma.user.delete({
        where: { id: userId },
      });
    } catch (error) {
      throw error;
    }
  }
}
