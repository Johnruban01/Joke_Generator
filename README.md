# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})


🌟 Features
🎲 Get a random joke in English from an external API

🌐 Automatically translates the joke into Tamil

⚡ Fast and lightweight build powered by Vite

🎨 Simple and clean UI

🧪 TypeScript for type safety

🚀 Tech Stack
Vite (for fast build and dev server)

TypeScript

Fetch API / Axios for API requests

Translation API (e.g., Google Translate API, LibreTranslate, etc.)

CSS / Tailwind / your preferred styling solution

🛠️ Setup Instructions
Clone the repo:

bash
Copy
Edit
git clone https://github.com/your-username/joke-generator-app.git
cd joke-generator-app
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
(Optional) Set up your translation API key in a .env file:

env
Copy
Edit
VITE_TRANSLATE_API_KEY=your_api_key
