import { NextRequest, NextResponse } from 'next/server';
import { JWTService } from './jwt';

export interface AuthenticatedRequest extends NextRequest {
  user?: {
    userId: string;
    email: string;
  };
}

/**
 * Middleware to authenticate API requests
 */
export async function authenticateRequest(request: NextRequest): Promise<NextResponse | null> {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization header missing or invalid' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    try {
      const payload = JWTService.verifyToken(token);
      
      // Add user info to request for downstream handlers
      (request as AuthenticatedRequest).user = {
        userId: payload.userId,
        email: payload.email,
      };
      
      return null; // Continue to handler
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

/**
 * Higher-order function to wrap API handlers with authentication
 */
export function withAuth(handler: Function) {
  return async (request: NextRequest) => {
    const authResult = await authenticateRequest(request);
    
    if (authResult) {
      return authResult;
    }
    
    return handler(request);
  };
}

/**
 * Helper function to get user from authenticated request
 */
export function getUserFromRequest(request: AuthenticatedRequest) {
  if (!request.user) {
    throw new Error('User not authenticated');
  }
  return request.user;
}
