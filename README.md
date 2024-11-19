Task Management Application (MERN Stack)
This is a simple Task Management Application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to manage tasks with basic CRUD operations (Create, Read, Update, Delete) and features like marking tasks as complete.

Features
Create tasks with a title, description, due date, and status.
View a list of all tasks.
Update task details (title, description, due date, and status).
Delete tasks.
Mark tasks as complete.
Fully responsive interface.
Technologies Used
Frontend
React.js
Axios (for API requests)
Backend
Node.js
Express.js
MongoDB with Mongoose
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v14 or later)
MongoDB (local or cloud instance)
NPM or Yarn
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/jindalayush326/task-management-app.git
cd task-management-app
2. Backend Setup
Navigate to the backend folder:

bash
Copy code
cd backend
Install dependencies:

bash
Copy code
npm install
Create a .env file in the backend directory and add the following environment variables:

env
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskmanager?retryWrites=true&w=majority
PORT=5000
Start the backend server:

bash
Copy code
node app.js
The backend will be running on http://localhost:5000.

3. Frontend Setup
Navigate to the frontend folder:

bash
Copy code
cd ../frontend
Install dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
The frontend will be running on http://localhost:3000.

API Endpoints
Base URL: http://localhost:5000/api/tasks
GET /tasks: Retrieve all tasks

Response:
json
Copy code
[
    {
        "_id": "task_id",
        "title": "Task Title",
        "description": "Task Description",
        "due_date": "2024-11-30T00:00:00.000Z",
        "status": "pending",
        "createdAt": "2024-11-19T10:00:00.000Z",
        "updatedAt": "2024-11-19T10:00:00.000Z"
    }
]
GET /tasks/
: Retrieve a specific task by ID

Response:
json
Copy code
{
    "_id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "due_date": "2024-11-30T00:00:00.000Z",
    "status": "pending",
    "createdAt": "2024-11-19T10:00:00.000Z",
    "updatedAt": "2024-11-19T10:00:00.000Z"
}
POST /tasks: Create a new task

Request Body:
json
Copy code
{
    "title": "Task Title",
    "description": "Task Description",
    "due_date": "2024-11-30"
}
Response:
json
Copy code
{
    "_id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "due_date": "2024-11-30T00:00:00.000Z",
    "status": "pending",
    "createdAt": "2024-11-19T10:00:00.000Z",
    "updatedAt": "2024-11-19T10:00:00.000Z"
}
PUT /tasks/
: Update an existing task

Request Body:
json
Copy code
{
    "title": "Updated Task Title",
    "description": "Updated Description",
    "due_date": "2024-12-01",
    "status": "in_progress"
}
Response:
json
Copy code
{
    "_id": "task_id",
    "title": "Updated Task Title",
    "description": "Updated Description",
    "due_date": "2024-12-01T00:00:00.000Z",
    "status": "in_progress",
    "createdAt": "2024-11-19T10:00:00.000Z",
    "updatedAt": "2024-11-19T10:20:00.000Z"
}
PATCH /tasks/
/complete: Mark a task as complete

Response:
json
Copy code
{
    "_id": "task_id",
    "title": "Task Title",
    "description": "Task Description",
    "due_date": "2024-11-30T00:00:00.000Z",
    "status": "completed",
    "createdAt": "2024-11-19T10:00:00.000Z",
    "updatedAt": "2024-11-19T10:20:00.000Z"
}
DELETE /tasks/
: Delete a task

Response: No Content (204 status code)
Frontend Usage
Add a Task:

Fill in the task form with a title, description, and due date.
Click "Create Task" to add it to the list.
View Tasks:

All tasks are displayed in a list with their details.
Update a Task:

Click "Update" next to a task to edit its details in a pre-filled form.
Mark a Task as Complete:

Click "Complete" to change the task’s status to "Completed."
Delete a Task:

Click "Delete" to remove the task from the list.
Testing
Manual Testing
Use Postman or Thunder Client to test backend endpoints.
Test frontend actions by interacting with the interface.
Unit Testing
Write unit tests for critical backend functions using Jest or Mocha.
Example: Validate the creation of a task and ensure the status defaults to pending.
Known Issues
None currently. Please report any issues in the GitHub repository.
Future Enhancements
Add user authentication (e.g., JWT-based authentication).
Implement pagination for task lists.
Add search and filter options for tasks.
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.

