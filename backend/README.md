# NSPT Backend API

Node.js backend API for NSPT Web Application.

## Features

- Career applications management with file upload
- Contact form handling
- Project consultation management
- Promotions management
- Email notifications via Nodemailer
- MongoDB database integration

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Multer (file uploads)
- Nodemailer (email)

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

## Run

```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

- `GET /` - Health check
- `POST /api/careers` - Submit career application
- `POST /api/contact` - Submit contact form
- `POST /api/project-consultation` - Submit project consultation
- `POST /api/promotion` - Create promotion

## Deployment

1. Set environment variables
2. Deploy to Heroku/Railway/Render
3. Ensure MongoDB connection is accessible
