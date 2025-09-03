import jwt from 'jsonwebtoken';

export interface JWTPayload {
  userId: string;
  email: string;
  iat: number;
  exp: number;
}

export class JWTService {
  private static readonly JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';
  private static readonly JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
  private static readonly JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '30d';

  /**
   * Generate a new JWT token for a user
   */
  static generateToken(userId: string, email: string): string {
    const payload: Omit<JWTPayload, 'iat' | 'exp'> = {
      userId,
      email,
    };

    return jwt.sign(payload, this.JWT_SECRET, {
      expiresIn: this.JWT_EXPIRES_IN as any,
    });
  }

  /**
   * Generate a refresh token for a user
   */
  static generateRefreshToken(userId: string, email: string): string {
    const payload: Omit<JWTPayload, 'iat' | 'exp'> = {
      userId,
      email,
    };

    return jwt.sign(payload, this.JWT_SECRET, {
      expiresIn: this.JWT_REFRESH_EXPIRES_IN as any,
    });
  }

  /**
   * Verify and decode a JWT token
   */
  static verifyToken(token: string): JWTPayload {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET) as JWTPayload;
      return decoded;
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }

  /**
   * Refresh an existing token
   */
  static refreshToken(token: string): string {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET) as JWTPayload;
      return this.generateToken(decoded.userId, decoded.email);
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
  }

  /**
   * Decode a token without verification (for debugging)
   */
  static decodeToken(token: string): JWTPayload | null {
    try {
      return jwt.decode(token) as JWTPayload;
    } catch (error) {
      return null;
    }
  }
}
