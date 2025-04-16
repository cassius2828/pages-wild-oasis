# 🧪 Next.js Pages Router Practice Project

This is a **practice project** built with **Next.js (Pages Router)** and **Supabase**, designed to solidify the concepts taught in _The Ultimate React Course 2025: React, Next.js, Redux & More_ by **Jonas Schmedtmann**.

---

## 📚 Purpose

The main goal of this project is to:

- Understand the **Pages Router** system in Next.js (legacy routing)
- Practice project structure and routing behavior **before** transitioning to the **App Router**
- Compare architectural differences and developer experience between **Pages Router** and **App Router**
- Interact with **Supabase** as a backend-as-a-service (BaaS) for handling simple data storage and API interactions

---

## 🧰 Tech Stack

- **Next.js (Pages Router)** — Legacy routing mechanism
- **Supabase** — Backend for data storage (PostgreSQL, RESTful API)
- **JavaScript** — No TypeScript; keeps the setup simple and easy to understand

---

## 🏕️ Context

This is a **barebones clone** of a larger cabin rental business project also featured in the course. This version focuses solely on the foundational Next.js routing and data-handling patterns.

---

## 🧠 Key Learnings

- Pages-based routing in Next.js
- Serverless API routes using `/api`
- Working with Supabase (CRUD)
- Basic form handling and server actions
- Static vs dynamic routing concepts in Next.js

---

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/nextjs-pages-router-practice.git

2. Install Dependencies
    ```
    npm install
    ```

3. Set Up .env.local with your **Supabase project URL** and **Anon Key**
    ```
    NEXT_PUBLIC_SUPABASE_URL=your_url_here
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
    ```

4. Run Dev Server
    ```
    npm run dev
    ```

## Folder Structure (Simplified)

    
    /pages          --> Routes
    /api            --> API routes for form submissions
    /lib/supabase   --> Supabase client setup
    /components     --> reusable components
    
## Notes
- this project is intended for educational purposes
- For full features, refer to the App Router version in the course detailed below

## Credits 
- **Instructor**: Jonus Schmedtmann
- **Course**: [The Ultimate React Course 2025](https://www.udemy.com/share/108PTK3@pr5hxR2oK-4wXMfGAHdi4IDdBx6BhKJIODsWWHpgU4wmbNJH_vRAxjj2ea-yTeA1Ag==/)

