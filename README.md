# Taskmanager API Endpoints

Created API endpoints for Auth & Curd operations of our Task Manager

## Table of Contents

- [Authentication](#authentication)
  - [Register](#register)
  - [Login](#login)
- [Tasks](#tasks)
  - [Get All Tasks](#get-all-tasks)
  - [Create Task](#create-task)
  - [Update Task](#update-task)
  - [Delete Task](#delete-task)

## Authentication

### Register

Create a new user account.

- **Endpoint:** `/api/auth/`
- **Method:** `POST`
- **Request Body:**
  - `email`: User's email address
  - `password`: User's password (hashed and stored securely)
- **Response:**
  - `message`: Success message or error details
  - `userid`: genrated id from db

### Login

Authenticate an existing user.

- **Endpoint:** `/api/auth/login`
- **Method:** `POST`
- **Request Body:**
  - `email`: User's email address
  - `password`: User's password
- **Response:**
  - `message`: Success message or error details
  - `token`: JWT token for further authentication

## Tasks

All task-related operations.

Middleware is added for verifying the JWT token at every task route to retrieve the user ID.

### Get All Tasks

Retrieve all tasks for a user.

- **Endpoint:** `/api/task`
- **Method:** `GET`
- **Authorization Header:** `Bearer <token>`
- **Response:**
  - List of tasks or error details

### Create Task

Create a new task for a user.

- **Endpoint:** `/api/task`
- **Method:** `POST`
- **Authorization Header:** `Bearer <token>`
- **Request Body:**
  - `title`: Task title
- **Response:**
  - Created task details or error details

### Update Task

Update an existing task.

- **Endpoint:** `/api/task/:taskId`
- **Method:** `PUT`
- **Authorization Header:** `Bearer <token>`
- **Request Body:**
  - `title`: Updated task title
  - `description`: Updated task description
- **Response:**
  - Updated task details or error details

### Delete Task

Delete an existing task.

- **Endpoint:** `/api/task/:taskId`
- **Method:** `DELETE`
- **Authorization Header:** `Bearer <token>`
- **Response:**
  - Success message or error details
