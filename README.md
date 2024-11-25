# Task Management Backend API

A backend API for managing tasks, built using **Node.js** and **MongoDB**. This API supports CRUD operations on tasks, user-specific task views, task completion tracking, and optional task history. The design ensures scalability and readiness for frontend integration.

---

## Features

- **User Management**: Create and manage users.
- **Task Management**: CRUD operations for tasks.
- **User-Specific Tasks**: Users see only their assigned tasks.
- **Task Completion**: Mark tasks as completed.
- **Task History**: (Optional) Track changes to tasks.
- **Validation & Error Handling**: Robust input validation and error responses.

---

## Technologies Used

- **Node.js** with Express.js
- **MongoDB** with Mongoose ORM
- **Joi** for validation
- **dotenv** for environment variable management

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

1. **Node.js**: [Install Node.js](https://nodejs.org/)
2. **MongoDB**: [Install MongoDB](https://www.mongodb.com/) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
3. **Git**: [Install Git](https://git-scm.com/)

---

### Installation Steps

1. **Clone the repository**  
   Open a terminal and run:
   ```bash
   git clone https://github.com/your-username/task-manager-backend.git
   cd task-manager-backend


## API Endpoints

### User Routes

| Method | Endpoint         | Description                      | Example Request Body                           |
|--------|------------------|----------------------------------|-----------------------------------------------|
| POST   | `/api/users`     | Create a new user               | `{ "name": "John Doe", "email": "john@example.com" }` |
| GET    | `/api/users`     | Get all users                   | N/A                                           |
| GET    | `/api/users/:id` | Get user by ID                  | N/A                                           |

---

### Task Routes

| Method | Endpoint         | Description                      | Example Request Body                           |
|--------|------------------|----------------------------------|-----------------------------------------------|
| POST   | `/api/tasks`     | Create a new task               | `{ "title": "Task 1", "description": "Details about Task 1", "userId": "user_id_here" }` |
| GET    | `/api/tasks`     | Get all tasks                   | N/A                                           |
| GET    | `/api/tasks/:id` | Get a specific task by ID        | N/A                                           |
| PUT    | `/api/tasks/:id` | Update a task                   | `{ "title": "Updated Task", "completed": true }` |
| DELETE | `/api/tasks/:id` | Delete a task                   | N/A                                           |

---

### User-Specific Task View

| Method | Endpoint                | Description                           | Example Request Body |
|--------|-------------------------|---------------------------------------|-----------------------|
| GET    | `/api/tasks/user/:userId` | Get all tasks assigned to a specific user | N/A                 |

---

### Mark Task as Completed

| Method | Endpoint                 | Description                           | Example Request Body |
|--------|--------------------------|---------------------------------------|-----------------------|
| PATCH  | `/api/tasks/:id/complete` | Mark a specific task as completed    | N/A                 |

---

### Task History (Optional)

| Method | Endpoint          | Description                           | Example Request Body |
|--------|-------------------|---------------------------------------|-----------------------|
| GET    | `/api/tasks/:id/history` | Get the history of updates to a task | N/A                 |

---

### Response Structure

#### Successful Responses:
```json
{
  "success": true,
  "data": {
    // Response data
  }
}
