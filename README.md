# NSPT Web Application

A full-stack web application built with React.js frontend and Node.js backend.

## Project Structure

```
NSPT-Web/
├── frontend/          # React.js frontend application (User-facing website)
├── frontend-admin/    # React.js admin dashboard (Admin panel)
├── backend/           # Node.js backend API (Shared by both frontends)
└── README.md         # Project documentation
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd NSPT-Web
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup (User Website)
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000
```

Start the frontend development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

### 4. Frontend-Admin Setup (Admin Dashboard)
```bash
cd frontend-admin
npm install
```

Create a `.env` file in the frontend-admin directory:
```env
REACT_APP_API_URL=http://localhost:5000
```

Start the admin frontend development server:
```bash
npm start
```

The admin dashboard will run on `http://localhost:3001` (or next available port)

## Available Scripts

### Backend
- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon

### Frontend (User Website)
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Frontend-Admin (Admin Dashboard)
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## Features

### User Website (frontend/)
- Responsive web design
- Contact form with email functionality
- Career application system with file upload
- Project consultation form
- Modern UI with Tailwind CSS

### Admin Dashboard (frontend-admin/)
- Career applications management
- Contact inquiries management
- Promotions management
- Project consultations management
- Export to Excel functionality
- Advanced filtering and sorting
- Secure admin authentication

## Technologies Used

### Frontend & Frontend-Admin
- React.js
- React Router
- Tailwind CSS
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Multer for file uploads
- Nodemailer for email functionality

## Admin Credentials

Default admin login credentials:
- Username: `admin`
- Password: `nspt2024`

**Note:** Change these credentials in production!

## Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `build` folder

### Frontend-Admin (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `build` folder
3. Ensure it's deployed on a separate subdomain (e.g., admin.yourdomain.com)

### Backend (Heroku/Railway)
1. Set environment variables
2. Deploy the backend folder

## Environment Variables

Make sure to set all required environment variables in production:

**Backend:**
- `PORT`
- `MONGODB_URI`
- `JWT_SECRET`
- `EMAIL_USER`
- `EMAIL_PASS`

**Frontend:**
- `REACT_APP_API_URL`

**Frontend-Admin:**
- `REACT_APP_API_URL`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is private and confidential.
