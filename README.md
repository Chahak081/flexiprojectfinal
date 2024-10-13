# Project Management System

## Overview
This project is a web-based project management system built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. It allows users to create, manage, and track projects, tasks, and team members.

## Features
- User authentication and authorization
- Project creation and management
- Task creation and assignment
- Task status tracking (Requested, To do, In Progress, Done)
- Drag-and-drop task management
- Task details view
- Project deletion
- Task deletion
- Responsive design

## Setup and Execution

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (version 4 or higher)
- Docker (optional)

### Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/project-management-system.git
   ```
1. Navigate to the project directory:
   ```bash
   cd project-management-system
   ```
1. Install dependencies:
   ```bash
   npm install
   ```
   
1. Create a .env file in the root directory and add the following environment variables:  
   ```plaintext
   MONGODB_PATH=your MongoDB connection string
   SERVER_PORT=the port number for the backend server (default: 9000)
   CORS_ORIGIN=the origin URL for CORS (default: http://localhost:3000)

   ```

5.Start the backend server:
   ```bash
   npm run server
   ```

6.Start the frontend server:
   ```bash
   npm run start
   ```



