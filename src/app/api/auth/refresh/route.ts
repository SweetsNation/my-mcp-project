import { NextRequest, NextResponse } from 'next/server';
import { JWTService } from '@/lib/auth/jwt';
import { prisma } from '@/lib/database/client';

export async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get('refresh-token')?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { error: 'Refresh token not found' },
        { status: 401 }
      );
    }

    try {
      // Verify refresh token
      const payload = JWTService.verifyToken(refreshToken);
      
      // Check if token exists in database
      const session = await prisma.userSession.findFirst({
        where: {
          userId: payload.userId,
          tokenHash: refreshToken,
          expiresAt: {
            gt: new Date(),
          },
        },
      });

      if (!session) {
        return NextResponse.json(
          { error: 'Invalid refresh token' },
          { status: 401 }
        );
      }

      // Generate new access token
      const newToken = JWTService.generateToken(payload.userId, payload.email);

      // Create response
      const response = NextResponse.json({
        success: true,
        message: 'Token refreshed successfully',
      });

      // Set new access token
      response.cookies.set('auth-token', newToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60, // 7 days
        path: '/',
      });

      return response;
    } catch (error) {
      // Clear invalid refresh token
      const response = NextResponse.json(
        { error: 'Invalid refresh token' },
        { status: 401 }
      );

      response.cookies.set('refresh-token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 0,
        path: '/',
      });

      return response;
    }
  } catch (error) {
    console.error('Refresh token error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
