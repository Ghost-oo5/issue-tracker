# Ghost OO5 Issue Tracker

A simple, full-stack Issue Tracker application built with **Next.js**, **TypeScript**, **Prisma**, **NextAuth**, **Tailwind CSS**, and **Radix UI**. This project provides a clean UI for creating, viewing, editing, assigning, and closing issues, backed by a MySQL database and secured with Google Authentication.

## 🔧 Features

* **Authentication**: Google OAuth via NextAuth.js

* **Issue Management**:

  * Create, edit, delete issues

  * Assign issues to users

  * Filter by status (Open, In Progress, Closed)

  * Pagination and sorting

* **Tech Stack**:

  * Frontend: Next.js (App Router), React, TypeScript, Radix UI, Tailwind CSS

  * Backend: Next.js API Routes, Prisma ORM, MySQL

  * State Management & Data Fetching: React Query (TanStack Query)

  * Markdown Support: react-simplemde-editor & react-markdown

## 🚀 Getting Started

### Prerequisites

* Node.js v18 or later

* MySQL database (or compatible)

* Google OAuth credentials (Client ID & Secret)

### Installation

1. **Clone the repository**

   ```
   git clone [https://github.com/your-username/ghost-oo5-issue-tracker.git](https://github.com/your-username/ghost-oo5-issue-tracker.git)
   cd ghost-oo5-issue-tracker

   ```

2. **Install dependencies**

   ```
   npm install
   # or
   yarn install
   # or
   pnpm install

   ```

3. **Environment Variables**
   Create a `.env` file in the root with the following (example):

   ```
   DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_URL=http://localhost:3000

   ```

4. **Database Setup & Migrations**
   Generate Prisma client and run migrations:

   ```
   npx prisma generate
   npx prisma migrate deploy
   # or for development:
   npx prisma migrate dev --name init

   ```

5. **Run the Development Server**

   ```
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev

   ```

   Visit `http://localhost:3000` in your browser.

## 📦 Available Scripts

* `dev` – Start Next.js in development mode

* `build` – Build the production-ready app

* `start` – Start the production server

* `lint` – Run ESLint

See `package.json` for full details.

## 🗂 Project Structure

```
├── app/                # Next.js App Router
│   ├── api/            # API routes: auth, issue, users
│   ├── components/     # Shared UI components
│   ├── issues/         # Issue pages and sub-components
│   ├── globals.css     # Global styles & theme
│   └── layout.tsx      # Root layout with providers
├── prisma/             # Prisma schema & migrations
├── public/             # Static assets
├── middleware.ts       # NextAuth middleware
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration

```

## 🔒 Authentication & Authorization

Uses NextAuth.js with the Prisma Adapter.

Only authenticated users can create, edit, or delete issues.

Middleware protects the “New Issue” page.

## 📄 Database Schema

Defined in `prisma/schema.prisma`:

```
model Issue {
  id               Int      @id @default(autoincrement())
  title            String   @db.VarChar(255)
  description      String   @db.Text
  status           Status   @default(OPEN)
  createdAt        DateTime @default(now())
  updatedAt        DateTime @updatedAt
  assignedToUserId String?  @db.VarChar(255)
  assignedToUser   User?    @relation(fields: [assignedToUserId], references: [id])
}

enum Status {
  OPEN
  IN_PROGRESS
  CLOSED
}

```

Run `npx prisma studio` to browse data in a GUI.

## 📫 Contributing

1. Fork the repository

2. Create a feature branch (`git checkout -b feature/my-feature`)

3. Commit your changes (`git commit -m 'Add awesome feature'`)

4. Push to the branch (`git push origin feature/my-feature`)

5. Open a Pull Request
