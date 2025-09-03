import { NextRequest, NextResponse } from 'next/server';
import { UserService } from '@/lib/services/userService';
import { getUserFromRequest, withAuth } from '@/lib/auth/middleware';

// Get user profile
export const GET = withAuth(async (request: NextRequest) => {
  try {
    const user = getUserFromRequest(request as any);
    
    const userProfile = await UserService.getUserById(user.userId);
    
    if (!userProfile) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      user: userProfile,
    });
  } catch (error) {
    console.error('Get profile error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
});

// Update user profile
export const PUT = withAuth(async (request: NextRequest) => {
  try {
    const user = getUserFromRequest(request as any);
    const body = await request.json();
    
    // Remove sensitive fields that shouldn't be updated via this endpoint
    const { password, email, ...updateData } = body;
    
    // Validate input
    if (updateData.firstName && typeof updateData.firstName !== 'string') {
      return NextResponse.json(
        { error: 'First name must be a string' },
        { status: 400 }
      );
    }
    
    if (updateData.lastName && typeof updateData.lastName !== 'string') {
      return NextResponse.json(
        { error: 'Last name must be a string' },
        { status: 400 }
      );
    }
    
    if (updateData.phone && typeof updateData.phone !== 'string') {
      return NextResponse.json(
        { error: 'Phone must be a string' },
        { status: 400 }
      );
    }
    
    if (updateData.dateOfBirth && isNaN(Date.parse(updateData.dateOfBirth))) {
      return NextResponse.json(
        { error: 'Invalid date format' },
        { status: 400 }
      );
    }

    // Update user profile
    const updatedUser = await UserService.updateUser(user.userId, updateData);

    return NextResponse.json({
      success: true,
      user: updatedUser,
      message: 'Profile updated successfully',
    });
  } catch (error) {
    console.error('Update profile error:', error);
    
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
