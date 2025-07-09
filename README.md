# Admin Dashboard Assignment

This is a simple Admin Dashboard web application built using **React**, **Tailwind CSS**, and **Vite**. It allows an admin to log in using mock credentials and perform basic CRUD operations on a user list. The UI is responsive, user-friendly, and styled using Tailwind CSS.

## ✨ Features

- **Admin Login** (mock authentication)
- **Add New Users**
- **Edit and Update User Details**
- **Delete Users**s
- Built with **React + Vite** for fast performance and easy development

## 🔧 Tech Stack

| Layer       | Technology                  |
|-------------|-----------------------------|
| Frontend    | React, TypeScript           |
| Styling     | Tailwind CSS                |
| Routing     | React Router DOM            |
| Icons       | React Icons                 |
| HTTP Client | Axios                       |
| Build Tool  | Vite                        |
| Testing     | Jest, React Testing Library |

## 🔐 Mock Login Credentials

To access the admin dashboard, use the following mock credentials:
Username: abc@gmail.com
Password: 123


> These are hardcoded for assignment/demo purposes only.

## 📂 Project Structure

Frontend/
├── components/ # Reusable components like forms, navbar, etc.
├── pages/ # Main pages like Login and Dashboard
├── data/ #mock json files
├── App.tsx # Application entry and routing
├── main.tsx # Main render file
├── index.css # Tailwind CSS base file



## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/Nikhitha-dev308/Frontend_Assignment.git


**install all the dependencies from package.json file such as**
npm install


## Start development server
npm run dev
The app should now be running at:
📍 http://localhost:5173


## 🚀 Running tests 
npm run test
This project includes testing support using Jest and React Testing Library.

## Author
This project was developed individually as part of my assignment.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
