# Overview

This is a full-stack web application built with a React TypeScript frontend and Express.js backend. The project uses Vite for frontend bundling, Drizzle ORM for database operations, and includes a comprehensive UI component library based on Radix UI and shadcn/ui. The application follows a monorepo structure with shared schema definitions and follows modern development practices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for development and production
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Development**: TSX for TypeScript execution in development

### Database Strategy
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Centralized schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for schema migrations stored in `/migrations`
- **Database Provider**: Configured for Neon Database (@neondatabase/serverless)

## Key Components

### Shared Schema (`/shared/schema.ts`)
- Defines database tables using Drizzle ORM
- Includes Zod schema validation for type safety
- Currently includes a `users` table with username/password authentication
- Uses PostgreSQL-specific features like `gen_random_uuid()`

### Storage Layer (`/server/storage.ts`)
- Abstract storage interface (`IStorage`) for CRUD operations
- In-memory implementation (`MemStorage`) for development
- Ready for database implementation using Drizzle ORM
- Supports user management operations

### UI Components (`/client/src/components/ui/`)
- Comprehensive component library based on shadcn/ui
- Built on Radix UI primitives for accessibility
- Includes forms, navigation, data display, and feedback components
- Custom theme support with CSS variables

### API Client (`/client/src/lib/queryClient.ts`)
- Centralized API request handling with error management
- TanStack Query configuration for caching and synchronization
- Custom query functions with authentication handling
- Automatic 401 handling for unauthorized requests

## Data Flow

### Request Flow
1. Client makes API requests through the configured query client
2. Express server receives requests and logs them for debugging
3. Route handlers interact with the storage layer
4. Storage layer performs CRUD operations (currently in-memory)
5. Responses are sent back with proper error handling

### Authentication Flow
- Session-based authentication using express-session
- PostgreSQL session store for production persistence
- User credentials stored with password hashing support
- Cookie-based session management

### Development Workflow
- Vite dev server proxies API requests to Express backend
- Hot module replacement for frontend development
- TypeScript compilation checking without emission
- Database schema changes managed through Drizzle migrations

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm** & **drizzle-kit**: Database ORM and migration tools
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **react-hook-form**: Form state management
- **zod**: Runtime type validation

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for backend
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-***: Replit-specific development tools

### UI & Styling
- **class-variance-authority**: Component variant management
- **tailwind-merge** & **clsx**: Conditional class merging
- **lucide-react**: Icon library
- **date-fns**: Date manipulation utilities

## Deployment Strategy

### Build Process
- Frontend builds to `/dist/public` using Vite
- Backend bundles to `/dist/index.js` using esbuild
- Shared schema and types are included in both builds
- Static assets served by Express in production

### Environment Configuration
- Development uses tsx for backend execution
- Production runs compiled JavaScript with Node.js
- Database URL configured through environment variables
- Vite development server with backend proxy

### Production Considerations
- Express serves static files in production mode
- Database migrations run separately via `npm run db:push`
- Session store persists to PostgreSQL database
- Error handling includes proper status codes and messages

The application architecture supports scaling from development to production with proper separation of concerns, type safety throughout the stack, and modern development tooling.