# React Interview Examples

This repository supports the book Acing the Frontend Interview, offering hands-on coding examples to reinforce the key concepts covered. These examples are designed to help readers prepare effectively for frontend development interviews through practical implementation.

## Requirements
* Node.js: v22 or higher
* npm: v10 or higher

## Getting started
1. Clone the repository
```
git clone https://github.com/JenniferFuBook/react-interview
cd react-interview
```

2. Install dependencies
```
npm install
```

3. Start the development server
```
npm run dev
```
You should see output like:
```
> react-interview@1.0.0 dev
> vite
  VITE v6.0.11  ready in 207 ms
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
Open a browser and go to `http://localhost:5173` to view the following “My Favorite Article” page:

![alt text](https://github.com/JenniferFuBook/react-interview/blob/main/public/my-favorite-article.png?raw=true)

## Running examples
By default, the app runs the `BlogPostExample`.

### Run a specific example
You can launch a specific example by setting the `VITE_NAME` environment variable:
```
VITE_NAME=CssSpecificityExample npm run dev
```

### Hot-reload friendly configuration
In `App.tsx`, you can set the example programmatically:
```
const exampleName = import.meta.env.VITE_NAME || 'BlogPostExample';
// You can also hardcode a specific example:
const exampleName = 'CssSpecificityExample';
```

## Project structure
The repository is set up as a [Vite](https://vite.dev) TypeScript project. Vite is a modern build tool and development server that offers lightning-fast startup and hot module replacement for web projects. It is designed to provide an extremely fast and efficient development experience by leveraging native ES modules and smart caching. The directory and code structure are organized as follows:
```
react-interview/                   # Root of the project
  ├── public/                      # Static assets (images, fonts, etc.)
  ├── src/                         # Application source code
  |     ├── algorithms/            # Common algorithm implementations
  │     ├── assets/                # Shared images and assets
  │     ├── components/            # Reusable React components
  │     ├── hooks/                 # Custom React hooks
  │     ├── snippets/              # Code snippets
  │     ├── use-cases/             # Individual use case demos
  │     ├── App.tsx                # Main app component
  │     ├── index.css              # Global styles
  │     ├── main.tsx               # Standard app entry point
  │     ├── mainWithErrorHooks.tsx # Alternate entry to demonstrate error hooks
  │     └── vite-env.d.ts          # Vite environment type declarations
  ├── .env                         # Environment variable definitions
  ├── .gitignore                   # Git ignore rules
  ├── eslint.config.js             # ESLint configuration
  ├── index.html                   # Main HTML entry point
  ├── package.json                 # Project metadata and scripts
  ├── README.md                    # Project documentation
  ├── tsconfig.app.json            # TypeScript config for the app
  ├── tsconfig.json                # Base TypeScript configuration
  ├── tsconfig.node.json           # Node.js-specific TypeScript config
  ├── tsconfig.tsbuildinfo         # TS incremental build cache
  └── vite.config.ts               # Vite configuration
```