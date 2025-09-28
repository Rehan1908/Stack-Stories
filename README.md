# Stack Stories Blog
https://stack-stories.onrender.com
**Stack Stories** is a modern, full-featured blog platform that allows users to read, write, and share insightful blog posts. Built using the MERN stack (MongoDB, Express, React, Node.js), this project showcases industry standards and best practices in web development, ensuring scalability, maintainability, and a great user experience.

---

## 📝 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

---

## ✨ Features

<!----><a name="features"></a>
- **User Authentication**: Secure registration and login with JSON Web Tokens (JWT).
- **CRUD Operations**: Easily create, edit, and delete blog posts.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Search and Filter**: Efficiently search for posts by titles or tags.
- **Comment System**: Engage with your audience through an interactive comment feature.
- **Categories and Tags**: Organize posts for better discoverability.

---

## 💻 Tech Stack

<!----><a name="tech-stack"></a>
- **Frontend**: React.js, HTML5, CSS3, Tailwind
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Styling**: CSS Modules or Styled Components
- **Version Control**: Git, GitHub

---

## 🏗️ Project Structure

<!----><a name="project-structure"></a>
```
stack-stories/
├── client/           # Frontend React app
│   ├── public/
│   ├── src/
│   │   ├── assets/        # Static assets
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages (Home, Login, Blog Post, etc.)
│   │   ├── redux/         # State management
│   │   ├── App.jsx        # Main application file
│   │   └── main.jsx       # Application entry point
│   └── package.json
├── api/              # Backend Node.js app
│   ├── controllers/   # Route logic for the blog
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes (CRUD for blog, auth routes)
│   ├── utils/         # Utility functions
│   └── index.js       # Entry point for the backend server
├── .gitignore        # Ignored files and folders
├── README.md         # Project documentation
└── package.json      # Node.js dependencies
---

## ⚙️ Installation

<!----><a name="installation"></a>

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Rehan1908/stack-stories.git
   cd stack-stories
   ```

2. **Install server dependencies**:

   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**:

   ```bash
   cd ../client
   npm install
   ```

4. **Configure Environment Variables**:

   In the `server/` directory, create a `.env` file and add the following variables:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the development server**:

   ```bash
   # In the root directory
   npm run dev
   ```

---

## 🚀 Usage

<!----><a name="usage"></a>
- **Frontend**: The React app will run at `http://localhost:5173`.
- **Backend**: The Express server will run at `http://localhost:3000`.

---

## 🔗 API Endpoints

<!----><a name="api-endpoints"></a>

| Method | Endpoint                                     | Description                          |
|--------|---------------------------------------------|--------------------------------------|
| POST   | `/api/auth/signup`                          | Register a new user                  |
| POST   | `/api/auth/signin`                          | User login                           |
| POST   | `/api/auth/google`                          | Sign in with Google                  |
| POST   | `/api/comment/create`                       | Create a new comment                 |
| GET    | `/api/comment/getPostComments/:postId`      | Get all comments for a post          |
| PUT    | `/api/comment/likeComment/:commentId`       | Like a comment                       |
| PUT    | `/api/comment/editComment/:commentId`       | Edit a comment                       |
| DELETE | `/api/comment/deleteComment/:commentId`     | Delete a comment                     |
| GET    | `/api/comment/getcomments`                  | Get all comments for a user          |
| POST   | `/api/post/create`                          | Create a new post                    |
| GET    | `/api/post/getposts`                        | Get all blog posts                   |
| DELETE | `/api/post/deletepost/:postId/:userId`      | Delete a post                        |
| PUT    | `/api/post/updatepost/:postId/:userId`      | Update a post                        |
| GET    | `/api/post/test`                            | Test endpoint                        |
| PUT    | `/api/user/update/:userId`                  | Update a user profile                |
| DELETE | `/api/user/delete/:userId`                  | Delete a user profile                |
| POST   | `/api/auth/signout`                         | Sign out a user                      |
| GET    | `/api/user/getusers`                        | Get all users                        |
| GET    | `/api/user/:userId`                         | Get a specific user                  |

---

## 🤝 Contributing

<!----><a name="contributing"></a>
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Rehan1908/Stack-Stories/issues).

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

---

**Happy Coding!**
