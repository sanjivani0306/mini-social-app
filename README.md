 Mini Social App 

A full-stack Mini Social Media Feed Application built using the MERN stack.
Users can register, log in, create posts, and view a live social feed.
This project demonstrates full-stack development skills including REST APIs, authentication, database integration, and cloud deployment.

🚀 Live Demo
Frontend (Vercel):
👉 https://mini-social-app-two.vercel.app
Backend API (Render):
👉 https://mini-social-app-ypol.onrender.com

🧩 Features
✅ User Registration & Login
✅ JWT Authentication
✅ Create & View Posts
✅ RESTful API Integration
✅ Responsive UI
✅ Full Deployment (Frontend + Backend)

🛠️ Tech Stack
Frontend
React.js (Create React App)
Axios
CSS

Backend
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT Authentication
CORS & dotenv

Deployment
Vercel (Frontend)
Render (Backend)
GitHub (Version Control)

📁 Project Structure
mini-social-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/sanjivani0306/mini-social-app.git
cd mini-social-app

2️⃣ Backend Setup
cd backend
npm install
Create .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Run backend:
npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm start

🔑 Environment Variables
Backend (.env)
PORT
MONGO_URI
JWT_SECRET
Frontend (Vercel)
REACT_APP_API_URL=https://mini-social-app-ypol.onrender.com

📡 API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login
Posts
GET /api/posts
POST /api/posts

🌍 Deployment
Backend deployed on Render
Frontend deployed on Vercel
Environment variables configured for production API connection.

👩‍💻 Author
Sanjivani Tulugu
GitHub: https://github.com/sanjivani0306
