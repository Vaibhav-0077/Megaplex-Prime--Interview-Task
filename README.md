# 🔐 MockAuth Full Stack Authentication Project

A simple **full‑stack authentication dashboard** built as an interview/task project. The goal of this project is to demonstrate **frontend–backend integration, authentication flow, routing, CORS handling, and deployment** using modern tools.

This project uses **mock authentication** (no real database or password hashing) as required by the task.

---

## 🚀 Live Demo

 **Frontend:** [https://megaplex-prime-interview-task-978j.onrender.comx`]
 **Backend API:** [https://megaplex-prime-interview-task-p6gm.onrender.com]

---

## 🧩 Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* Axios
* CSS (responsive design)

## Backend

* Node.js
* Express.js
* CORS
* Middleware‑based route protection (mock auth)

### Deployment

* Render (Monorepo setup)
* GitHub


---

## ✨ Features

* User login with username & password
* Token‑based mock authentication
* Protected dashboard route
* User data displayed after login
* Logout functionality
* Fully responsive UI
* CORS configured for production
* Environment‑based API configuration

---

## 🔑 Authentication Flow (Mock)

1. User enters **username & password**
2. Frontend sends POST request to `/api/login`
3. Backend validates input (mock validation)
4. Backend returns:

   ```json
   {
     "token": "dummy-token",
     "user": { "username": "example" }
   }
   ```
5. Token & username stored in `localStorage`
6. Protected routes check token existence
7. Logout removes token and redirects user

> ⚠️ No real authentication or database is used (as per task requirement)

---

## ⚙️ Environment Variables

### Frontend (`frontend/.env`)

```
VITE_API_URL= https://megaplex-prime-interview-task-978j.onrender.com
```

---

## 🛠️ Local Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Run Backend

```bash
cd backend
npm install
npm start
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🧠 Key Learnings Demonstrated

* Full‑stack authentication flow
* Handling CORS issues in production
* Environment variable management
* Protected routes in React
* Deployment of monorepo projects

---

## 📌 Notes

* This project is intended for **demonstration and interview purposes**
* Authentication is mocked (no DB, no hashing)
* Easily extendable with real JWT & database

---

## 👤 Author

**Vaibhav**
Full Stack Developer


---

✅ Project completed as per task requirements
