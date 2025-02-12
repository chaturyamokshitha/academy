Here's the final **README.md** with **Aiven Cloud** specified as the database provider, along with **Clerk, Prisma, MUX, and UploadThing** configurations.

---

# 🚀 Techno - Next.js, Prisma, Clerk, and Aiven Cloud Database

This project is a **forked version** of a Next.js application that integrates **Prisma ORM** with **Aiven Cloud MySQL database**, **Clerk authentication**, **MUX video services**, and **UploadThing** for file handling.

## 🎯 Features

✅ **Next.js** - React framework for SSR & API routes  
✅ **Prisma ORM** - Database interaction using **Aiven Cloud (MySQL)**  
✅ **Clerk Authentication** - Secure user authentication and management  
✅ **MUX Video API** - Video streaming services  
✅ **UploadThing** - Easy file uploads  
✅ **TypeScript & Tailwind CSS** - Modern styling and type safety  

---

## 🛠️ Tech Stack

- **Next.js** - React framework for server-side rendering and API routes
- **Prisma** - ORM for database management
- **Aiven Cloud** - Managed **MySQL** database
- **Clerk** - Authentication and user management
- **MUX** - Video streaming API
- **UploadThing** - File uploading service
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/techno.git
cd techno
```

### 2️⃣ Install Dependencies
Ensure you have **Node.js** installed, then run:
```sh
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

---

## 🛠️ Environment Variables Setup

Create a `.env` file in the root directory and add the following:

```ini
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=your-clerk-sign-in-url
NEXT_PUBLIC_CLERK_SIGN_UP_URL=your-clerk-sign-up-url

# Database (Aiven Cloud MySQL)
DATABASE_URL=""

# MUX API (Video Streaming)
MUX_TOKEN_ID=your-mux-token-id
MUX_TOKEN_SECRET=your-mux-token-secret

# UploadThing (File Uploading)
UPLOADTHING_TOKEN=your-uploadthing-token
UPLOADTHING_SECRET=your-uploadthing-secret
```

### 🔗 **Get Your API Keys**
- **[Clerk Authentication](https://clerk.com/)** → Sign up and create a project.
- **[Aiven Cloud (MySQL Database)](https://aiven.io/)** → Create and manage a MySQL database instance.
- **[MUX (Video Streaming)](https://mux.com/)** → Sign up and get API credentials.
- **[UploadThing (File Uploads)](https://uploadthing.com/)** → Sign up and get an API key.

---

## 🛠️ Prisma & Aiven Cloud Database Setup

After configuring the **.env** file, set up **Prisma**.

### 3️⃣ Initialize Prisma
```sh
npx prisma generate
```

### 4️⃣ Run Database Migrations
```sh
npx prisma migrate dev --name init
```
This applies the schema to your **Aiven Cloud MySQL database**.

---

## 🎨 Running the Project

### 5️⃣ Start the Development Server
```sh
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 API Routes

This project includes API routes powered by **Next.js API handlers** and **Prisma**.

| Route                    | Method | Description                      |
|--------------------------|--------|----------------------------------|
| `/api/users`             | `GET`  | Fetch all users                 |
| `/api/users/:id`         | `GET`  | Fetch a specific user           |
| `/api/users`             | `POST` | Create a new user               |
| `/api/users/:id`         | `PUT`  | Update user details             |
| `/api/users/:id`         | `DELETE` | Delete a user                 |

You can test these APIs using **Postman** or **Thunder Client**.

---

## 📚 Learn More

To learn more about the technologies used in this project, visit:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Clerk Authentication](https://clerk.com/docs) - Learn how to set up Clerk.
- [Prisma Documentation](https://www.prisma.io/docs) - Learn how Prisma ORM works.
- [Aiven Cloud](https://aiven.io/) - Learn how to set up a managed MySQL database.
- [MUX API](https://docs.mux.com/) - Learn about MUX video streaming.
- [UploadThing Documentation](https://docs.uploadthing.com/) - Learn how to handle file uploads.

---

## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

To deploy manually using Vercel CLI:
```sh
npx vercel
```

---

## 🎯 Lessons Learned

- How **Prisma ORM** simplifies database management  
- How to integrate **Clerk authentication** in a Next.js app  
- Using **Aiven Cloud (MySQL)** as a database provider  
- How **MUX API** enables video streaming  
- Uploading files with **UploadThing**  
- TypeScript usage with Prisma and Next.js  

---

### ✅ **What's Updated in This README?**
✔ **Added Aiven Cloud as the MySQL provider**  
✔ **Included .env setup for Clerk, Prisma, MUX, and UploadThing**  
✔ **Provided official links for API keys and setup**  
✔ **Clear Prisma database setup instructions**  

Let me know if you need any more refinements! 🚀🔥
