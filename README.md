# 📦 PickOn Delivery System

A full-stack delivery management system built with the **MERN stack** (MongoDB, Express.js, React, Node.js). The platform supports both **document and product delivery**, and allows **users to become delivery agents**. This project is scalable, secure, and responsive.

## 🔧 Features

### ✅ User Functionality
- User registration & login (JWT auth)
- Parcel sending (document/product)
- Parcel tracking system with unique ID
- View delivery status and history
- Responsive UI (mobile & desktop)

### 📮 Parcel Management
- Add new parcels (weight, type, address, contact)
- Auto-generate tracking ID
- Select sender/receiver details
- Assign parcels to warehouses and delivery agents

### 🚴 Delivery Boy Dashboard
- Register as a delivery person
- View assigned deliveries
- Mark parcels as delivered
- Track earnings and performance

### 🛠 Admin Dashboard (if implemented)
- Manage all users and parcels
- Approve delivery boys
- View reports and statistics

## 🛠️ Tech Stack

| Tech            | Description                        |
|-----------------|------------------------------------|
| **MongoDB**     | NoSQL database for storing data    |
| **Express.js**  | Backend API framework              |
| **React.js**    | Frontend library                   |
| **Node.js**     | Server environment                 |
| **Firebase**    | Deployment or authentication (if used) |
| **React Hook Form** | Efficient form handling       |
| **Tailwind CSS** | Fast and modern UI styling       |
| **Axios / React Query** | API communication & caching |
| **Toastify / Modal** | Notifications & UI alerts     |

## 🖼️ Screenshots
> Add screenshots here for:
- Add Parcel Form
- Delivery Boy Dashboard
- Admin Panel
- Tracking Page

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/mern-delivery-system.git
cd mern-delivery-system
2. Setup Backend
bash
Copy
Edit
cd server
npm install
npm run dev
3. Setup Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
4. Environment Variables
Create .env files in both server/ and client/ directories with the necessary environment variables like:

MONGO_URI

JWT_SECRET

VITE_API_BASE_URL (frontend)

🌍 Deployment
Frontend: Firebase / Vercel / Netlify

Backend: Render / Railway / Cyclic

🙌 Author
Sajjad Hossain Jim
📧 sajjadjim15@gmail.com

📜 License
This project is open-source and available under the MIT License.

⭐ If you like this project, feel free to star the repo and contribute!

yaml
Copy
Edit

---

Let me know if you also want this split into multiple files (backend, frontend, .env.example, etc.) or want help deploying to Firebase/Render.


