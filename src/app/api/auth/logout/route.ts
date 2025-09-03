import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/database/client';
import { getUserFromRequest, withAuth } from '@/lib/auth/middleware';

export const POST = withAuth(async (request: NextRequest) => {
  try {
    const user = getUserFromRequest(request as any);
    
    // Clear user sessions from database
    await prisma.userSession.deleteMany({
      where: { userId: user.userId },
    });

    // Create response
    const response = NextResponse.json({
      success: true,
      message: 'Logged out successfully',
    });

    // Clear cookies
    response.cookies.set('auth-token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    });

    response.cookies.set('refresh-token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
});
