# Cartivaa – Modern E-Commerce Platform

A full-stack e-commerce website built using **Next.js**, **MongoDB**, **Tailwind CSS**, **Inngest**,**Clerk**, and **Cloudinary** . Cartivaa offers a clean, scalable base for any online store with authentication, dynamic product pages, and more.

---

## Live Demo

[Cartivaa on Vercel](https://ecommerce-platform-coral.vercel.app)

---

## Tech Stack

| Layer        | Tools / Libraries                  |
| ------------ | ---------------------------------- |
| Frontend     | Next.js (App Router)               |
| Backend      | MongoDB, Mongoose (via API Routes) |
| Auth         | Clerk                              |
| Styling      | Tailwind CSS                       |
| Media Upload | Cloudinary                         |
| Event Queue  | Inngest (event handling pipeline)  |
| Hosting      | Vercel                             |

---

## Features

- Modern responsive UI
- User authentication via Clerk
- Dynamic product cards (MVP)
- Image uploads via Cloudinary
- Toast notifications
- Contact & About pages
- Modular folder structure
- Environment-based config

---

## Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/mahmoudessam16/Cartivaa_Ecommerce.git
cd Cartivaa_Ecommerce
2️⃣ Install dependencies
Use --legacy-peer-deps to avoid version conflicts:

bash
Copy
Edit
npm install --legacy-peer-deps
3️⃣ Create .env.local file
Create a .env.local file in the root and add your environment variables:

env
Copy
Edit
# Public
NEXT_PUBLIC_CURRENCY=$
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_public_key

# Private
CLERK_SECRET_KEY=your_clerk_secret_key
MONGODB_URI=your_mongo_uri
INNGEST_SIGNING_KEY=your_inngest_signing_key
INNGEST_EVENT_KEY=your_inngest_event_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
⚠️ Important: Never commit your .env.local to GitHub. It contains secrets.

4️⃣ Run Development Server
bash
Copy
Edit
npm run dev
```
