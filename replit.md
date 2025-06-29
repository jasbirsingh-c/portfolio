# Developer Portfolio Application

## Overview

This is a modern full-stack developer portfolio application built with React and Express. The application showcases a professional portfolio website for "Jasbirsingh Chauhan" featuring sections for about, skills, projects, and contact information. It follows a monorepo structure with a React frontend and Express backend, designed to be scalable and maintainable.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reloading with tsx

### Design System
- **Component Library**: Custom components built on Radix UI
- **Theme**: Dark theme with blue accent colors
- **Typography**: Inter font family
- **Icons**: Lucide React icons and Font Awesome
- **Responsive**: Mobile-first responsive design

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Landing section with call-to-action buttons
- **About Section**: Personal information and statistics
- **Skills Section**: Technical skills with animated cards
- **Projects Section**: Featured projects showcase
- **Contact Section**: Contact form and information
- **UI Components**: Comprehensive set of reusable components

### Backend Components
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Route Handler**: Centralized route registration system
- **Middleware**: Request logging and error handling
- **Development Server**: Vite integration for development

### Database Schema
- **Users Table**: Basic user authentication structure
- **Schema Validation**: Drizzle-Zod integration for type-safe operations

## Data Flow

1. **Client Request**: Browser makes requests to Express server
2. **Routing**: Express routes handle API endpoints (prefixed with `/api`)
3. **Storage**: Business logic interacts with storage abstraction
4. **Database**: Drizzle ORM manages PostgreSQL operations
5. **Response**: JSON responses sent back to client
6. **State Management**: React Query manages client-side caching and synchronization

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM for type-safe database operations
- **UI**: Radix UI for accessible component primitives
- **Styling**: Tailwind CSS for utility-first styling
- **Validation**: Zod for runtime type validation

### Development Dependencies
- **Build**: Vite for frontend bundling, esbuild for backend
- **Development**: tsx for TypeScript execution
- **Replit Integration**: Specialized plugins for Replit environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied to PostgreSQL

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)

### Production Deployment
- **Static Assets**: Served from `dist/public` directory
- **Server**: Node.js server running bundled Express application
- **Database**: PostgreSQL database with applied migrations

### Development Environment
- **Hot Reloading**: Vite middleware integrated with Express
- **Database**: Development database with push migrations
- **Debugging**: Source maps and error overlays enabled

## Changelog

```
Changelog:
- June 29, 2025. Initial setup
- June 29, 2025. Customized portfolio for Jasbirsingh Chauhan with 12+ years experience
- June 29, 2025. Added JavaScript to technical skills alongside Python, PHP, MySQL, Linux, AWS
- June 29, 2025. Updated all personal information, contact details, and professional descriptions
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Portfolio focus: Showcase expertise in Python, PHP, JavaScript, MySQL, Linux, and AWS
Target deployment: GitHub Pages
Experience level: 12+ years in full-stack development
```