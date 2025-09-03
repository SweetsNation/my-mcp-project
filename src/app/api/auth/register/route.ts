import { NextRequest, NextResponse } from 'next/server';
import { UserService } from '@/lib/services/userService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName, phone, dateOfBirth, medicareNumber, memberNumber, planType } = body;

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Email, password, first name, and last name are required' },
        { status: 400 }
      );
    }

    // Validate input types
    if (typeof email !== 'string' || typeof password !== 'string' || 
        typeof firstName !== 'string' || typeof lastName !== 'string') {
      return NextResponse.json(
        { error: 'Invalid input types' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create user data object
    const userData = {
      email: email.toLowerCase().trim(),
      password,
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: phone?.trim(),
      dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
      medicareNumber: medicareNumber?.trim(),
      memberNumber: memberNumber?.trim(),
      planType: planType?.trim(),
    };

    // Create user account
    const user = await UserService.createUser(userData);

    return NextResponse.json({
      success: true,
      user,
      message: 'Account created successfully',
    }, { status: 201 });

  } catch (error) {
    console.error('Registration error:', error);
    
    if (error instanceof Error) {
      // Handle specific error cases
      if (error.message.includes('already exists')) {
        return NextResponse.json(
          { error: 'An account with this email already exists' },
          { status: 409 }
        );
      }
      
      if (error.message.includes('Password validation failed')) {
        return NextResponse.json(
          { error: error.message },
          { status: 400 }
        );
      }

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
}
