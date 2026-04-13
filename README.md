# TaskFlow — Task Management System

## 🚀 Overview

TaskFlow is a minimal yet functional task management application that allows users to:

- Register and log in
- View projects
- Create, update, and delete tasks
- Filter tasks by status (Todo, In Progress, Done)

This project focuses on building a clean, scalable frontend with a good user experience.

---

## 🛠 Tech Stack

### Frontend
- React (TypeScript)
- Vite
- Tailwind CSS
- React Router

### Mock Backend
- JSON Server

---

## 🧱 Architecture Decisions

- **Separation of concerns**: API logic is kept in `/api`
- **Reusable components**: Navbar, ProtectedRoute
- **State management**: React Hooks (`useState`, `useEffect`)
- **Authentication**: Stored in `localStorage`
- **Routing**: Protected routes using a custom wrapper

### Tradeoffs

- Used JSON Server instead of a real backend for speed
- Authentication is mocked (no JWT)
- Minimal validation to stay within time constraints

---

## ⚙️ Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/taskflow-yourname
cd taskflow-frontend