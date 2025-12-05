### Nodejs-Mailer-App

A simple and modular Node.js application for sending transactional emails using Express, Nodemailer, Mongoose, and Joi for validation.
This project demonstrates clean folder structure, environment-based configuration, and email workflow automation.

### Features

User registration with email verification
Token generation & storage
Modular MVC-style structure
Environment-based configuration
Reusable email utility
MongoDB connection with Mongoose
Input validation using Joi

### Folder Structure
Nodejs-Mailer-App
│── index.js          # App entry point
│── db.js             # Database connection
│── .env              # Environment settings
│── package.json
│
├── model/
│   ├── user.js       # User schema
│   └── token.js      # Verification token schema
│
├── routes/
│   └── users.js      # User-related routes
│
└── utils/
    └── email.js      # Nodemailer email helper

### Tech Stack

Node.js
Express
MongoDB + Mongoose
Nodemailer
Joi
dotenv

### Installation

npm init --yes
npm install express mongoose nodemailer joi dotenv

### Running the App

Create a .env file in the project root:

MONGO_URI=your_mongodb_url
EMAIL_USER=your_email
EMAIL_PASS=your_password
PORT=5000

Start the app:

node index.js

### Sending an Email

The /users route handles user registration and automatically triggers the email function via utils/email.js.
