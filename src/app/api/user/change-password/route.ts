import { NextRequest, NextResponse } from 'next/server';
import { UserService } from '@/lib/services/userService';
import { getUserFromRequest, withAuth } from '@/lib/auth/middleware';

export const POST = withAuth(async (request: NextRequest) => {
  try {
    const user = getUserFromRequest(request as any);
    const body = await request.json();
    const { currentPassword, newPassword } = body;

    // Validate input
    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Current password and new password are required' },
        { status: 400 }
      );
    }

    if (typeof currentPassword !== 'string' || typeof newPassword !== 'string') {
      return NextResponse.json(
        { error: 'Invalid input types' },
        { status: 400 }
      );
    }

    // Change password
    await UserService.changePassword(user.userId, currentPassword, newPassword);

    return NextResponse.json({
      success: true,
      message: 'Password changed successfully',
    });
  } catch (error) {
    console.error('Change password error:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
});
