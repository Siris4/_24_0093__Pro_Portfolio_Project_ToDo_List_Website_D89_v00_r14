# To-Do List Application

This is a simple web-based to-do list application that allows users to create, manage, and save their task lists. It supports user authentication, task reordering via drag-and-drop, and saving task lists to a database.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)

## Features
- User registration and login system
- Create new task lists and save them
- View the history of saved task lists
- Drag-and-drop to reorder tasks
- Responsive design with user-friendly UI

## Technologies
- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript (jQuery, jQuery UI)
- **Database**: SQLite
- **Authentication**: Werkzeug for password hashing

## Installation
1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
Install the required Python packages.
bash

pip install -r requirements.txt
Initialize the SQLite database.
bash

python -c "from main import db; db.create_all()"
Run the Flask application.
bash

python main.py
Usage
After launching the application, open your browser and go to http://127.0.0.1:5000.
Register an account or log in to an existing one.
Create a new task list, reorder tasks, and save it.
Access previously saved lists from the "List History" page.
File Structure
bash

.
├── main.py               # Flask backend and routes
├── templates/            # HTML templates
│   ├── index.html        # Main page for creating tasks
│   ├── login.html        # Login page
│   ├── register.html     # Registration page
│   ├── list_history.html # Page to view saved task lists
├── static/               # Static files (CSS, JS)
│   ├── css/
│   │   └── styles.css    # CSS for styling the UI
│   ├── js/
│   │   └── scripts.js    # JavaScript for frontend interactivity
├── users.db              # SQLite database to store user and task list data
└── README.md             # This file
Features in Detail
User Authentication:

The application uses Flask session management for user authentication.
Passwords are hashed using Werkzeug before being stored in the SQLite database.
Task Creation and Management:

Tasks can be added, edited, reordered, or deleted.
The jQuery UI sortable feature allows users to reorder tasks using drag-and-drop.
Task Saving:

Task lists can be saved to the SQLite database.
The task data is serialized as JSON and stored in the database, and users can access previously saved lists from the "List History" page.
License
This project is open-source and available under the MIT License.

Credits
Developed by Siris
vbnet


### Notes:
- Make sure to customize the **git clone** URL and other personal info (like **Credits**) as needed.
- The `requirements.txt` isn't included in your files, so you may want to create one with Flask and the required dependencies.

Let me know if you need further adjustments!