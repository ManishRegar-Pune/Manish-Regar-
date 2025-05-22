# Project Overview

This is a full-stack web application built with a React frontend and Express backend. The architecture follows a modern approach with TypeScript throughout and uses Drizzle ORM for database interactions. The project also incorporates a component library built with Radix UI and styled with Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The application uses a client-side React setup with the following key characteristics:

1. **Component Structure**: Follows a modular approach with components organized in dedicated directories.
2. **UI Framework**: Uses ShadCN UI components built on top of Radix UI primitives for accessible, customizable UI elements.
3. **Styling**: Uses Tailwind CSS for utility-based styling with a custom theme defined in tailwind.config.ts.
4. **State Management**: Uses React Query for server state management.
5. **Routing**: Implements Wouter for lightweight client-side routing.
6. **Animation**: Uses Framer Motion for component animations.

### Backend Architecture

1. **Server Framework**: Express.js server running on Node.js
2. **API Structure**: REST API with routes prefixed with `/api`
3. **Database Access**: Uses an abstraction layer through a storage interface
4. **Development Tools**: Integrated with Vite for development and hot module reloading

### Data Layer Architecture

1. **ORM**: Drizzle ORM for type-safe database access
2. **Schema**: Defined in `shared/schema.ts` with tables and relationships
3. **Storage Interface**: Abstraction layer for database operations, currently implemented with an in-memory store but designed to be replaced with a database implementation

## Key Components

### Frontend Components

1. **UI Component Library**: Rich set of UI components based on ShadCN/Radix UI primitives
2. **Page Components**: Page-level components for different routes
3. **Feature Components**: Components specific to features like ChatSupport, Services, etc.
4. **Layout Components**: Components for page layout like navigation and footer
5. **Utility Components**: Reusable components like DigitalDecorations

### Backend Components

1. **Express Application**: Main server setup
2. **Routes**: API endpoint definitions
3. **Storage Layer**: Interface and implementation for data persistence
4. **Development Tools**: Vite integration for development experience

### Shared Components

1. **Database Schema**: Shared schema definitions used by both frontend and backend
2. **Type Definitions**: TypeScript types shared across client and server

## Data Flow

1. **Client to Server**: The frontend makes requests to the backend API using React Query
2. **API Handling**: Express routes handle API requests
3. **Data Access**: Server uses the storage interface to interact with the database
4. **Response**: Server sends JSON responses back to the client
5. **Client State**: React Query manages data caching and refetching

The typical flow starts with a user action in the UI, which triggers a request to the API. The server processes the request, interacts with the database through the storage interface, and returns a response. The UI then updates to reflect the new state.

## External Dependencies

### Frontend Dependencies

1. **React**: Core UI library
2. **React Query**: Data fetching and caching
3. **Radix UI**: Headless UI components
4. **Tailwind CSS**: Utility-first CSS framework
5. **Framer Motion**: Animation library
6. **Wouter**: Lightweight routing

### Backend Dependencies

1. **Express**: Web server framework
2. **Drizzle ORM**: Database ORM
3. **Zod**: Schema validation
4. **Vite**: Development server and bundling

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

1. **Build Process**: Uses Vite to build the frontend and esbuild for the backend
2. **Runtime**: Node.js 20
3. **Database**: PostgreSQL 16 (configured but not actively used yet)
4. **Entry Point**: `npm run dev` for development, `npm run start` for production
5. **Port Configuration**: Exposes port 5000 internally, mapped to port 80 externally

During deployment:
1. The frontend is built into static assets
2. The backend is compiled into a Node.js executable
3. The production server serves both the API and the static frontend assets

## Development Workflow

1. **Local Development**: `npm run dev` starts both the frontend and backend in development mode
2. **Database Schema Changes**: Update schema in `shared/schema.ts` and run `npm run db:push` to apply changes
3. **Type Checking**: Run `npm run check` to verify TypeScript types
4. **Production Build**: `npm run build` creates a production build of both frontend and backend

## Getting Started

To implement new features:

1. **Backend Routes**: Add new routes in `server/routes.ts`
2. **Database Models**: Extend the schema in `shared/schema.ts`
3. **Frontend Pages**: Add new pages in `client/src/pages`
4. **API Integration**: Use React Query hooks to connect to the backend API
5. **Storage Implementation**: Expand the storage interface in `server/storage.ts` for new data operations

To set up database persistence:
1. Connect to the PostgreSQL database by updating the storage implementation
2. Ensure the DATABASE_URL environment variable is set
3. Run database migrations using Drizzle