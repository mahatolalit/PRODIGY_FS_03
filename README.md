# 🛒 VixKart – Electronics eCommerce App

A modern full-stack eCommerce platform for electronic gadgets, built with **Next.js**, **Clerk**, **MongoDB**, **Cloudinary**, and **Inngest**.

## 🔧 Stack

- **Next.js** (App Router)
- **Clerk** – Auth & user management
- **MongoDB** – Product & order data
- **Cloudinary** – Product image uploads
- **Inngest** – Background jobs (e.g. order processing)
- **Tailwind CSS** – UI styling

## ⚙️ Setup

```bash
git clone https://github.com/yourusername/vixkart.git
cd vixkart
npm install
npm run dev
```


## Create .env.local and add:

```bash
# Public Environment Variables
NEXT_PUBLIC_CURRENCY=₹
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...

# Private Environment Variables
CLERK_SECRET_KEY=...
MONGODB_URI=...
INNGEST_SIGNING_KEY=''
INNGEST_EVENT_KEY=''

# Cloudinary
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```


