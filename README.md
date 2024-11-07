# Advanced Authentication System with User, Admin, and Sub-admin Roles

This project is a Node.js-based authentication system with role-based access control (RBAC) for users, admins, and sub-admins. Each role has its own set of permissions, with protected routes for accessing specific resources. The system includes JWT authentication, route protection, and a fully functional backend server.

## Features

- **User Authentication**: Signup, Login with JWT token-based authentication.
- **Role-Based Access Control (RBAC)**: Three roles - User, Admin, and Sub-admin, each with different access levels.
- **Protected Routes**: Routes are protected based on user roles using middleware.
- **Admin Features**: Admin can view all users and assign tasks to sub-admins.
- **MongoDB**: MongoDB is used to store user information and tasks.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Routes](#routes)
- [Postman Testing](#postman-testing)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/advanced-auth-system.git
    ```

2. Navigate to the project directory:
    ```bash
    cd advanced-auth-system
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and configure the following environment variables:

    ```
    NODE_ENV=development
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/auth-system
    JWT_SECRET=your_secret_key
    ```

5. Start the server:
    ```bash
    npm start
    ```

6. Open your browser or Postman and navigate to:
    ```
    http://localhost:5000
    ```

## Project Structure



## Environment Variables

You need to create a `.env` file in the root directory with the following variables:

- `NODE_ENV`: Environment mode (development/production).
- `PORT`: Port on which the server will run.
- `MONGO_URI`: MongoDB connection URI.
- `JWT_SECRET`: Secret key for JWT token generation.

## Routes

### 1. **User Routes**

| Route              | Method | Description                          |
|--------------------|--------|--------------------------------------|
| `/api/signup`      | POST   | Create a new user, admin, or subadmin |
| `/api/login`       | POST   | Login user, admin, or subadmin        |
| `/api/user-dashboard` | GET  | Get the user dashboard (Protected)    |

### 2. **Admin Routes**

| Route                  | Method | Description                             |
|------------------------|--------|-----------------------------------------|
| `/api/admin-dashboard`  | GET    | Admin-only access (Protected)           |
| `/api/admin/users`      | GET    | View all users (Admin only) (Protected) |


## Postman Testing

### 1. Signup
- URL: `/api/signup`
- Method: POST
- Body (raw JSON):
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "123456",
      "role": "user" // or "admin", "subadmin"
    }
    ```

### 2. Login
- URL: `/api/login`
- Method: POST
- Body (raw JSON):
    ```json
    {
      "email": "john@example.com",
      "password": "123456"
    }
    ```

### 3. Access Protected Routes
- **Authorization Header**: Use the token received from the login response.
- **Authorization Type**: Bearer Token
- Example for accessing `/api/user-dashboard`:
    - Method: GET
    - URL: `/api/user-dashboard`
    - Header: 
        ``` 
        Authorization: Bearer <token>
        ```

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: MongoDB object modeling tool.
- **JWT**: JSON Web Tokens for authentication.
- **bcrypt.js**: For hashing passwords.


