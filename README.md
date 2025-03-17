# Frontend Stack for WSTREET SMART LAB

## Core Technologies
- **Framework:** Vue 3
- **State Management:** Vuex
- **Routing:** Vue Router (History Mode enabled)
- **Styling:** CSS Grid (no CSS libraries, full manual control)
- **Preprocessor:** SCSS
- **Build Tool:** Webpack (custom configuration)

## Development Environment
- **Package Manager:** npm
- **Module Bundler:** Webpack
- **Linting & Formatting:**
    - ESLint (Standard Config)
    - Lint on Save enabled
- **Version Control:** Git (GitHub, branch `dev` as main development branch)

## Project Structure & Setup
- **Vue CLI with manual feature selection**
- **History mode enabled for clean URLs (handled via Webpack `historyApiFallback: true`)**
- **No additional CSS libraries (Vuetify, Bootstrap, etc.)**
- **Lightweight and optimized for performance**

## UI & Responsiveness
- **Grid-based layout using pure CSS Grid**
- **Mobile-first approach (mobile design is the priority, later adapted for desktop)**
- **Webpack Dev Server running on port 3000**

## Additional Notes
- Future enhancements might include API integration with backend services
- Performance-focused approach (no unnecessary dependencies)
- If UI layout "breaks" on desktop, a separate template will be created

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
