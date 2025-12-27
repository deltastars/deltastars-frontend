# Delta Stars Frontend

Welcome to the Delta Stars Frontend repository! This is a modern, responsive web application built with cutting-edge frontend technologies. This README provides comprehensive guidance for installation, features, and troubleshooting.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

Delta Stars Frontend is a modern frontend application designed to provide an exceptional user experience with intuitive interfaces and responsive design. Built with industry-standard technologies, it ensures optimal performance and maintainability.

### Tech Stack

- **Framework**: React or Vue.js (specify your framework)
- **Build Tool**: Vite, Webpack, or Next.js (specify your tool)
- **Package Manager**: npm or yarn
- **Styling**: CSS/SCSS, Tailwind CSS, or styled-components (specify your styling approach)
- **State Management**: Redux, Context API, Pinia, or Vuex (if applicable)
- **Testing**: Jest, Vitest, or similar (if applicable)

## Features

### Core Features

- ✨ **Responsive Design** - Fully responsive UI that works seamlessly across all devices and screen sizes
- 🚀 **Performance Optimized** - Optimized bundle size and lazy loading for fast page loads
- 🎨 **Modern UI Components** - Reusable, well-designed component library
- 🔐 **Secure** - Built-in security best practices and HTTPS support
- 🌍 **Internationalization** - Multi-language support (i18n ready)
- ♿ **Accessibility** - WCAG 2.1 AA compliant for inclusive design
- 🌓 **Dark Mode** - Optional dark theme support
- 📱 **Mobile-First** - Mobile-first design approach

### Advanced Features

- 🔄 **Real-time Updates** - WebSocket integration for live data updates
- 📊 **Data Visualization** - Interactive charts and graphs
- 🔍 **Search & Filtering** - Powerful search and advanced filtering capabilities
- 📈 **Analytics** - Built-in analytics integration
- 🎯 **Progressive Web App** - PWA support for offline functionality

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16.0.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
  
- **npm** (v7.0.0 or higher) or **yarn** (v1.22.0 or higher)
  - npm comes with Node.js
  - For yarn: `npm install -g yarn`
  - Verify installation: `npm --version` or `yarn --version`

- **Git** (v2.0.0 or higher)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

- **Optional**: An IDE such as VS Code, WebStorm, or similar

## Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/deltastars/deltastars-frontend.git
cd deltastars-frontend
```

### Step 2: Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### Step 3: Verify Installation

To verify that all dependencies are correctly installed:

```bash
npm list
# or
yarn list
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
VITE_API_URL=https://api.deltastars.com
VITE_API_TIMEOUT=30000

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_PWA=true
VITE_ENABLE_DARK_MODE=true

# Authentication
VITE_AUTH_ENABLED=true
VITE_AUTH_TOKEN_KEY=auth_token

# Logging
VITE_LOG_LEVEL=info

# Environment
VITE_ENVIRONMENT=development
```

### Local Configuration

Create a `.env.local` file for local-specific settings (this file is ignored by git):

```env
VITE_API_URL=http://localhost:3000
VITE_LOG_LEVEL=debug
```

## Running the Application

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (or the port configured in your build tool).

### Development with Debug Mode

For enhanced debugging:

```bash
DEBUG=* npm run dev
```

### Production Preview

Build and preview the production bundle locally:

```bash
npm run build
npm run preview
# or
yarn build
yarn preview
```

## Project Structure

```
deltastars-frontend/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── icons/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Home.vue
│   │   ├── Dashboard.vue
│   │   └── ...
│   ├── services/           # API services and utilities
│   │   ├── api.js
│   │   ├── auth.js
│   │   └── ...
│   ├── store/              # State management
│   │   ├── modules/
│   │   └── index.js
│   ├── styles/             # Global styles
│   │   ├── global.css
│   │   └── variables.css
│   ├── utils/              # Utility functions
│   │   ├── helpers.js
│   │   └── constants.js
│   ├── App.vue             # Root component
│   └── main.js             # Application entry point
├── tests/                  # Test files
│   ├── unit/
│   └── integration/
├── .env.example            # Example environment variables
├── .env.local              # Local environment variables (gitignored)
├── .gitignore
├── package.json
├── vite.config.js          # Vite configuration
└── README.md
```

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run unit tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run end-to-end tests
npm run test:e2e

# Lint code
npm run lint

# Format code
npm run format

# Type check (if using TypeScript)
npm run type-check
```

### Code Style

We follow strict code style guidelines:

- **Linter**: ESLint
- **Formatter**: Prettier
- **Pre-commit hooks**: Husky

Before committing, ensure your code passes linting:

```bash
npm run lint
npm run format
```

### Git Workflow

1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Make your changes and commit: `git commit -m "feat: add new feature"`
3. Push to your branch: `git push origin feature/your-feature-name`
4. Create a Pull Request on GitHub

## Building for Production

### Build Optimization

```bash
npm run build
```

This command:
- Minifies and bundles your code
- Optimizes images and assets
- Generates sourcemaps for debugging
- Creates an optimized dist/ directory

### Build Output

The production build will be generated in the `dist/` directory:

```
dist/
├── index.html
├── assets/
│   ├── js/
│   ├── css/
│   └── images/
└── favicon.ico
```

### Deployment

For deployment instructions, see the [DEPLOYMENT.md](./DEPLOYMENT.md) file.

## Troubleshooting

### Common Issues and Solutions

#### 1. **Node/npm Version Issues**

**Problem**: `npm ERR! The engine "node" is incompatible`

**Solution**:
```bash
node --version
# If version is below 16.0.0, update Node.js from nodejs.org
# Or use nvm (Node Version Manager)
nvm install 18
nvm use 18
```

#### 2. **Dependencies Installation Fails**

**Problem**: `npm ERR! code ERESOLVE, unable to resolve dependency tree`

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# If still failing, try with legacy peer deps
npm install --legacy-peer-deps
```

#### 3. **Port Already in Use**

**Problem**: `Error: listen EADDRINUSE: address already in use :::5173`

**Solution**:
```bash
# Find and kill the process using port 5173
lsof -i :5173
kill -9 <PID>

# Or use a different port
npm run dev -- --port 5174
```

#### 4. **Hot Module Replacement (HMR) Not Working**

**Problem**: Changes aren't reflecting in the browser

**Solution**:
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Restart the dev server: `npm run dev`
- Check if `vite.config.js` has proper HMR configuration
- Verify your firewall isn't blocking WebSocket connections

#### 5. **Build Fails or Contains Errors**

**Problem**: `npm run build` fails with errors

**Solution**:
```bash
# Check for TypeScript errors (if applicable)
npm run type-check

# Run linter to find syntax issues
npm run lint

# Clear build cache
rm -rf dist .vite

# Try building again
npm run build
```

#### 6. **CORS Issues**

**Problem**: `Access to XMLHttpRequest blocked by CORS policy`

**Solution**:
- Ensure your `.env` file has the correct `VITE_API_URL`
- Verify the backend API has CORS enabled for your frontend domain
- Check browser console for specific error details
- Test API endpoint directly: `curl https://api.deltastars.com/health`

#### 7. **Authentication Issues**

**Problem**: User gets logged out immediately or can't authenticate

**Solution**:
```bash
# Clear local storage and try again
# In browser console:
# localStorage.clear()

# Check token expiration in Network tab
# Verify VITE_AUTH_TOKEN_KEY matches backend
# Ensure cookies are enabled in browser
```

#### 8. **Styling/CSS Not Loading**

**Problem**: Styles appear broken or not applied

**Solution**:
- Clear browser cache
- Check if CSS build succeeded: `npm run build`
- Verify CSS imports in component files
- Check browser DevTools for 404 errors on CSS files

#### 9. **Performance Issues**

**Problem**: Application is slow or sluggish

**Solution**:
```bash
# Analyze bundle size
npm run build -- --analyze

# Check for unused dependencies
npm audit

# Run performance profiling in Chrome DevTools
# Profile > Record performance

# Check Network tab for large assets
```

#### 10. **Module Not Found Errors**

**Problem**: `Module not found: Can't resolve '@/components/Header'`

**Solution**:
- Verify path aliases in `vite.config.js` or `jsconfig.json`
- Check file actually exists and path is correct
- Restart dev server after adding new files
- Ensure case sensitivity matches (Linux/Mac are case-sensitive)

### Getting Help

If you encounter issues not listed above:

1. **Check the Documentation**: Review [docs/](./docs/) directory
2. **Search Issues**: Check [GitHub Issues](https://github.com/deltastars/deltastars-frontend/issues)
3. **Read Logs**: Review browser console (F12) and terminal output
4. **Create an Issue**: If the problem persists, [create a new issue](https://github.com/deltastars/deltastars-frontend/issues/new)

### Debugging Tips

- **Browser DevTools**: Press F12 to open developer tools
- **Vue/React DevTools**: Install browser extensions for framework debugging
- **Network Inspector**: Monitor API requests and responses
- **Console Logs**: Use `console.log()` for debugging
- **Sourcemaps**: Enable in development for accurate stack traces

## Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Standards

- Write clean, readable code
- Add tests for new features
- Update documentation
- Follow the existing code style
- Include meaningful commit messages

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

**Last Updated**: December 27, 2025

For questions or support, please open an issue or contact the development team.
