# 🍔 OrderIt — Food Ordering Web Application

A full-stack food ordering web application built with the **MERN Stack** (MongoDB, Express, React, Node.js).

## 🌐 Live Demo

- **Frontend:** [https://food-121s.vercel.app](https://food-121s.vercel.app)
- **Backend API:** [https://food-1-7w3b.onrender.com](https://food-1-7w3b.onrender.com)

---

## ✨ Features

- 🏪 Browse restaurants and menus
- 🛒 Add items to cart
- 💳 Stripe payment gateway integration
- 📦 Order tracking and history
- 👤 User authentication (Register / Login / Logout)
- 🔐 JWT-based authentication
- 🖼️ Cloudinary image uploads
- 📧 Password reset via email (Resend)
- 📱 Responsive design

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React 18 | UI Framework |
| Redux + Redux Thunk | State Management |
| Axios | API Calls |
| React Router v6 | Routing |
| Stripe React | Payment UI |
| Bootstrap 4 | Styling |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js + Express | Server |
| MongoDB Atlas | Database |
| Mongoose | ODM |
| JWT | Authentication |
| Cloudinary | Image Storage |
| Stripe | Payments |
| Resend | Email Service |

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org) (v16 or higher)
- [Git](https://git-scm.com)
- MongoDB Atlas account

### 1. Clone the repository
```bash
git clone https://github.com/ChinnamSrujan/food.git
cd food
```

### 2. Setup Backend
```bash
cd Backend-obfuscated
npm install
```

Create `config/config.env` file:
```env
PORT = 4000
NODE_ENV = DEVELOPMENT

DB_LOCAL_URI = mongodb://127.0.0.1:27017/Internship
DB_URI = your_mongodb_atlas_uri

JWT_SECRET = your_jwt_secret
JWT_EXPIRES_TIME = 90

CLOUDINARY_CLOUD_NAME = your_cloud_name
CLOUDINARY_API_KEY = your_api_key
CLOUDINARY_API_SECRET = your_api_secret

EMAIL_HOST = smtp.gmail.com
EMAIL_PORT = 587
EMAIL_USERNAME = your_email@gmail.com
EMAIL_PASSWORD = your_app_password
EMAIL_FROM = your_email@gmail.com
RESEND_API_KEY = your_resend_api_key

FRONTEND_URL = http://localhost:3000

STRIPE_SECRET_KEY = your_stripe_secret_key
STRIPE_API_KEY = your_stripe_public_key
```

### 3. Seed the Database
```bash
node utils/seeder.js
```

### 4. Start Backend
```bash
npm run dev
```

### 5. Setup Frontend
```bash
cd ../frontend
npm install --legacy-peer-deps
npm start
```

The app will open at `http://localhost:3000`

---

## 📁 Project Structure

```
food/
├── Backend-obfuscated/        # Express.js backend
│   ├── config/                # Database & env config
│   ├── controllers/           # Route controllers
│   ├── middlewares/           # Custom middlewares
│   ├── models/                # Mongoose models
│   ├── routes/                # API routes
│   ├── utils/                 # Helper utilities
│   └── server.js              # Entry point
│
├── frontend/                  # React frontend
│   ├── public/                # Static files
│   └── src/
│       ├── actions/           # Redux actions
│       ├── components/        # React components
│       ├── constants/         # Redux constants
│       ├── reducer/           # Redux reducers
│       └── store.js           # Redux store
│
└── Database/                  # Seed data (JSON)
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/eats/stores` | Get all restaurants |
| GET | `/api/v1/eats/menus` | Get all menus |
| POST | `/api/v1/users/login` | User login |
| POST | `/api/v1/users/signup` | User register |
| GET | `/api/v1/users/me` | Get current user |
| POST | `/api/v1/payment/process` | Create Stripe session |
| POST | `/api/v1/eats/orders/new` | Create new order |
| GET | `/api/v1/eats/orders/me/myOrders` | Get user orders |

---

## 🌍 Deployment

| Service | Platform |
|---------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |
| Images | Cloudinary |

---

## 👨‍💻 Author

**Chinnam Srujan**
- GitHub: [@ChinnamSrujan](https://github.com/ChinnamSrujan)
