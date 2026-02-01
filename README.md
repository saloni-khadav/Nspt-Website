# NSPT Web Application

A full-stack web application built with React.js frontend and Node.js backend.

## Project Structure

```
NSPT-Web/
├── frontend/          # React.js frontend application
├── backend/           # Node.js backend API
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

### 3. Frontend Setup
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

## Available Scripts

### Backend
- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## Features

- Responsive web design
- Contact form with email functionality
- Career application system with file upload
- Admin dashboard for managing applications
- Modern UI with Tailwind CSS

## Technologies Used

### Frontend
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

## Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `build` folder

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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is private and confidential.