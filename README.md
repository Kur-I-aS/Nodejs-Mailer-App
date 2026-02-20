# **Node.js Mailer Service**

A lightweight Node.js + Express backend service for sending emails using SMTP (Gmail) and MongoDB. This project demonstrates environment-based configuration, database connectivity with Mongoose, and a simple API-driven mail workflow.

---

## **Features**

- Express-based REST API
- MongoDB connection using Mongoose
- SMTP-based email sending
- Environment variable configuration using dotenv
- Modular route separation


## **Tech Stack**

- Node.js
- Express
- MongoDB (Mongoose)
- SMTP (Gmail)
- dotenv


## **Project Structure**

**Nodejs-Mailer-App**  
│  
│__ index.js        # Application entry point  
│__ db.js           # MongoDB connection  
│__ routes/  
│   └── users.js    # User / mail-related routes  
│__.env.example    # Environment variable template  
│__ package.json  


## **Environment Configuration**

**Create a .env file in the project root:**

DB=your_mongodb_connection_string 
HOST=smtp.gmail.com  
USER=your_email@gmail.com  
PASS=your_app_password  
PORT=8080  
BASE_URL=http://localhost:8080/api

⚠️ Use Gmail App Passwords. Do not use your real password.


## **Running the Application**

npm install  
node index.js  

Server will start at:
http://localhost:8080


## **API Usage (Example)**

**POST** /api/user/send-mail

Payload:

{  
  "to": "example@email.com",  
  "subject": "Test Mail",  
  "message": "Hello from Node Mailer App"  
}  

---
**Notes**  
This project focuses on backend mail handling.
Can be extended with authentication, validation, or queue-based mail processing.
