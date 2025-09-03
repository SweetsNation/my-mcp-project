# 🚀 **Phase 1: Backend Infrastructure & Authentication - Setup Guide**

## 📋 **Overview**

This document outlines the setup and configuration for Phase 1 of the El-Mag Insurance Client Portal implementation, which includes:

- ✅ **Authentication System** with JWT tokens
- ✅ **Password Security** with bcrypt hashing
- ✅ **Database Schema** with Prisma ORM
- ✅ **API Routes** for user management
- ✅ **Client-Side Context** for state management
- ✅ **Protected Routes** for secure access

## 🛠️ **Prerequisites**

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- npm or yarn package manager

## 📦 **Installation Steps**

### **1. Install Dependencies**

The following packages have been installed:
```bash
npm install bcryptjs jsonwebtoken @types/bcryptjs @types/jsonwebtoken
npm install prisma @prisma/client
npm install -D prisma
```

### **2. Environment Configuration**

Create a `.env.local` file in your project root with the following variables:

```env
# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/elmag_insurance"

# JWT Configuration
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"
JWT_REFRESH_EXPIRES_IN="30d"

# Application Configuration
NEXTAUTH_SECRET="your-nextauth-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Security
BCRYPT_ROUNDS=12
```

**⚠️ Important Security Notes:**
- Change `JWT_SECRET` to a strong, random string in production
- Use environment-specific database URLs
- Never commit `.env.local` to version control

### **3. Database Setup**

#### **Option A: Local PostgreSQL**

1. Install PostgreSQL locally
2. Create a new database:
   ```sql
   CREATE DATABASE elmag_insurance;
   ```
3. Update `DATABASE_URL` in `.env.local`

#### **Option B: Cloud Database (Recommended for Production)**

- **Supabase**: Free tier available, easy setup
- **PlanetScale**: Serverless MySQL with generous free tier
- **Railway**: Simple PostgreSQL hosting

### **4. Database Migration**

Run the following commands to set up your database:

```bash
# Generate Prisma client
npx prisma generate

# Create and apply database migrations
npx prisma migrate dev --name init

# (Optional) Seed database with sample data
npx prisma db seed
```

### **5. Verify Installation**

Check that all components are working:

```bash
# Check Prisma connection
npx prisma studio

# Run development server
npm run dev
```

## 🏗️ **Architecture Overview**

### **Authentication Flow**

```
User Login/Register → API Route → User Service → Database → JWT Token → Client
```

### **File Structure**

```
src/
├── lib/
│   ├── auth/
│   │   ├── jwt.ts          # JWT token management
│   │   ├── password.ts     # Password hashing & validation
│   │   └── middleware.ts   # Authentication middleware
│   ├── database/
│   │   └── client.ts       # Prisma database client
│   └── services/
│       └── userService.ts  # User business logic
├── app/
│   └── api/
│       ├── auth/           # Authentication endpoints
│       └── user/           # User management endpoints
├── contexts/
│   └── AuthContext.tsx     # React authentication context
└── components/
    └── auth/
        └── ProtectedRoute.tsx  # Route protection component
```

## 🔐 **Security Features**

### **Password Security**
- **bcrypt hashing** with configurable salt rounds
- **Password validation** with strength requirements
- **Secure token generation** for password resets

### **JWT Security**
- **HTTP-only cookies** for token storage
- **Automatic token refresh** mechanism
- **Session management** with database tracking
- **Configurable expiration** times

### **API Security**
- **Input validation** and sanitization
- **Rate limiting** (to be implemented)
- **CORS protection** (Next.js default)
- **SQL injection prevention** (Prisma ORM)

## 🧪 **Testing the Implementation**

### **1. Test User Registration**

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "SecurePass123!",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

### **2. Test User Login**

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "SecurePass123!"
  }'
```

### **3. Test Protected Route**

```bash
curl -X GET http://localhost:3000/api/user/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🚨 **Troubleshooting**

### **Common Issues**

1. **Database Connection Error**
   - Verify `DATABASE_URL` in `.env.local`
   - Check PostgreSQL service is running
   - Ensure database exists

2. **JWT Token Errors**
   - Verify `JWT_SECRET` is set
   - Check token expiration times
   - Ensure cookies are being set correctly

3. **Prisma Errors**
   - Run `npx prisma generate` after schema changes
   - Check database migrations are applied
   - Verify Prisma client is up to date

### **Debug Mode**

Enable detailed logging by setting:
```env
NODE_ENV=development
```

## 📈 **Next Steps**

After completing Phase 1 setup:

1. **Test all authentication flows**
2. **Verify database operations**
3. **Check security measures**
4. **Move to Phase 2: Core Portal Features**

## 🔗 **Useful Commands**

```bash
# Database operations
npx prisma studio                    # Open database GUI
npx prisma migrate dev              # Create and apply migrations
npx prisma generate                 # Generate Prisma client
npx prisma db push                  # Push schema changes directly

# Development
npm run dev                         # Start development server
npm run build                       # Build for production
npm run lint                        # Run ESLint
npm run type-check                  # Run TypeScript checks
```

## 📞 **Support**

If you encounter issues:

1. Check the troubleshooting section above
2. Review console logs and error messages
3. Verify all environment variables are set
4. Ensure database is accessible and properly configured

---

**🎉 Congratulations! You've successfully set up Phase 1 of the El-Mag Insurance Client Portal!**

The authentication system is now ready for user registration, login, and secure access to protected routes.
