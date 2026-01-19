# React SPA Collection

A collection of simple Single Page Applications (SPAs) built with React + Vite. This repository contains four beginner-friendly projects demonstrating fundamental React concepts and state management.

## 📁 Projects

### 1. Counter
A simple counter application demonstrating basic state management.
- **Features:**
  - Increment/Decrement counter
  - Real-time count display
  - Basic button interactions
- **Concepts:** `useState` hook, event handlers

### 2. Form
A form application showcasing controlled components and form handling.
- **Features:**
  - Name and email input fields
  - Form submission
  - Display submitted data
- **Concepts:** `useState` hook, controlled inputs, form handling, object state management

### 3. ToDoList
A todo list application for task management.
- **Features:**
  - Add new tasks
  - Mark tasks as complete/incomplete
  - Delete tasks
  - Enter key support for quick task addition
- **Concepts:** `useState` hook, array manipulation, mapping over arrays, conditional rendering

### 4. TT (Theme Toggle)
A theme switcher demonstrating light/dark mode toggle.
- **Features:**
  - Toggle between light and dark themes
  - Persistent theme state
  - Dynamic theme application
- **Concepts:** `useState` hook, `useEffect` hook, DOM manipulation

## 🛠️ Tech Stack

- **React** 19.2.0 - JavaScript library for building user interfaces
- **Vite** 7.2.4 - Next-generation frontend build tool
- **ESLint** - Code linting and quality checks

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation & Running

Each project is independent and can be run separately. Navigate to the desired project folder and follow these steps:

```bash
# Navigate to a project (e.g., Counter)
cd Counter

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Available Scripts

Each project includes the following npm scripts:

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📚 Project Structure

Each project follows a similar structure:

```
ProjectName/
├── public/           # Static assets
├── src/
│   ├── App.jsx       # Main application component
│   ├── App.css       # Component styles
│   ├── main.jsx      # Application entry point
│   ├── index.css     # Global styles
│   └── assets/       # Images and other assets
├── index.html        # HTML template
├── package.json      # Dependencies and scripts
├── vite.config.js    # Vite configuration
├── eslint.config.js  # ESLint configuration
└── README.md         # Project documentation
```

## 🎯 Learning Objectives

This collection is perfect for:
- Learning React fundamentals
- Understanding state management with hooks
- Practicing component-based architecture
- Getting familiar with modern build tools (Vite)
- Building interactive user interfaces

Happy Coding! 🚀
