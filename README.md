# User Management Dashboard

This project is a user management dashboard that allows users to view, add, edit, and delete user profiles. It uses the JSONPlaceholder free API for the backend to simulate the management of user data.

## Tech Stack

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **React Hook Form**: For easy form handling and validation.
- **Tailwind CSS**: A utility-first CSS framework for styling the UI.
- **JSONPlaceholder API**: A free fake REST API for testing and prototyping.

### Backend
- **JSONPlaceholder API**: A fake online REST API that provides data for users, posts, comments, etc., for testing and development purposes.

## Features

- **View User Profiles**: List all user profiles from the API.
- **Add New User**: A form to add a new user profile to the dashboard.
- **Edit User Profile**: Ability to edit an existing user profile by selecting it from the list.
- **Delete User Profile**: Option to remove a user profile from the list.

## Issues Faced

1. **Handling Dynamic Data Updates**: 
   - During the development of the form modal, I faced issues with updating the data dynamically. After submitting the form, the data was not updating in the UI, even after using methods like `map()` and spread operators to replace the old data. This was resolved after ensuring the form fields were correctly reset after each submission.

2. **Updating Data in Array**: 
   - While trying to update an item in the array using its `id`, I faced difficulties with the object references not being updated correctly. After several attempts, I finally used the `map()` method with the spread operator `{ ...item, ...newData }` to replace the old item with the new one in the array.

3. **Validation Errors**: 
   - Form validation was challenging at first, especially when validating multiple fields at once. I used React Hook Form’s built-in validation system and custom error messages to manage these issues.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
2. Navigate to the project folder::
   ```bash
   cd <project-folder>
3. Install dependencies:
   ```bash
   npm install
4. Run the development server:
   ```bash
   npm start
5. Open your browser and navigate to http://localhost:3000 to view the application.:

