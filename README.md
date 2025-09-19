# Flowlet

A modern full-stack application built with Next.js, GraphQL, Prisma, and Express.js.

## 🚀 Tech Stack

- **Frontend**: Next.js 15 with App Router, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **GraphQL**: Apollo Client for data fetching
- **Development**: ESLint, Prettier, Husky, TypeScript

## 📦 Additional Technologies

- **Styling**: Tailwind CSS v4 with Shadcn UI components
- **State Management**: Apollo Client with GraphQL
- **Database**: Prisma ORM with PostgreSQL
- **API**: Express.js with CORS, Helmet, Morgan
- **Development Tools**: ESLint, Prettier, Husky, lint-staged
- **Package Manager**: pnpm

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd flowlet
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:

```bash
cp env.example .env.local
```

4. Update the `.env.local` file with your database URL and other configuration.

5. Set up the database:

```bash
# Generate Prisma client
pnpm db:generate

# Push schema to database
pnpm db:push

# Or run migrations
pnpm db:migrate
```

6. Start the development servers:

```bash
# Start Next.js frontend (in one terminal)
pnpm dev

# Start Express.js backend (in another terminal)
pnpm server:dev
```

## 📁 Project Structure

```
flowlet/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   └── ui/            # Shadcn UI components
│   ├── lib/               # Utility libraries
│   │   ├── apollo/        # Apollo Client setup
│   │   ├── graphql/       # GraphQL queries & mutations
│   │   └── prisma.ts      # Prisma client
│   └── server/            # Express.js backend
│       └── index.ts       # Server entry point
├── prisma/
│   └── schema.prisma      # Database schema
├── .env.local            # Environment variables
├── components.json       # Shadcn UI config
├── tailwind.config.ts    # Tailwind CSS config
└── package.json
```

## 🎯 Available Scripts

### Frontend

- `pnpm dev` - Start Next.js development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server

### Backend

- `pnpm server` - Start Express.js server
- `pnpm server:dev` - Start Express.js with hot reload

### Database

- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push schema to database
- `pnpm db:migrate` - Run database migrations
- `pnpm db:studio` - Open Prisma Studio

### Development

- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/flowlet?schema=public"

# Next.js
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_GRAPHQL_ENDPOINT="http://localhost:3001/graphql"

# Server
PORT=3001
NODE_ENV="development"
FRONTEND_URL="http://localhost:3000"

# JWT (if using authentication)
JWT_SECRET="your-super-secret-jwt-key-here"
```

### Database Setup

1. Install PostgreSQL
2. Create a database named `flowlet`
3. Update the `DATABASE_URL` in your `.env.local` file
4. Run `pnpm db:push` to create the database schema

## 🎨 UI Components

This project uses Shadcn UI components. To add new components:

```bash
pnpm dlx shadcn@latest add [component-name]
```

## 📝 Development Guidelines

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Use conventional commit format
- Test your changes before committing

## 🚀 Deployment

### Frontend (Vercel)

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Render/Heroku)

1. Set up your database (PostgreSQL)
2. Configure environment variables
3. Deploy your Express.js server

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue in the repository.
