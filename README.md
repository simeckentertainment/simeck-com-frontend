# Simeck Entertainment Website

A modern, responsive web application for Simeck Entertainment, built with React, TypeScript, and Vite. This project features games, comics, and creative content, with a beautiful UI powered by Tailwind CSS v4.

## Features
- ⚡ Fast and modern development with Vite
- 🛠️ Type-safe codebase using TypeScript
- 🎨 Custom UI components and animations with Tailwind CSS v4
- 🧩 Modular structure for games, comics, and more
- 🌐 Routing with React Router v6+
- 🧹 Linting and code quality with ESLint

## Getting Started

### Prerequisites
- Node.js (v18 or newer recommended)
- npm (v9 or newer recommended)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Project Structure
```
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Route-based pages
│   ├── assets/            # Images and media
│   ├── styles/            # Global and custom CSS
│   ├── main.tsx           # App entry point
│   └── App.tsx            # Main app component
├── package.json           # Project metadata and scripts
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## Code Quality & Linting
- ESLint is configured for React and TypeScript best practices.
- For advanced type-aware linting, see the example configs below.

## Advanced ESLint Configuration

<details>
<summary>Type-aware and React-specific linting</summary>

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```
</details>

## Contributing
Pull requests and suggestions are welcome! Please open an issue or submit a PR for improvements or bug fixes.

## License
MIT
