# Portfolio Project

A modern, responsive portfolio website built with React and Vite.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- ⚡ Fast performance with Vite
- 🎨 Modern UI design with CSS
- 📱 Responsive layout
- ⚙️ ESLint configured for code quality
- 🔥 Hot Module Replacement (HMR) for development

## Tech Stack

- **React** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **CSS** - Styling
- **ESLint** - Code linting

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd practice-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create a production build:

```bash
npm run build
```

### Preview Production Build

Preview the production build:

```bash
npm run preview
```

### Lint Code

Check code quality:

```bash
npm run lint
```

## Project Structure

```
practice-react/
├── src/
│   ├── components/
│   │   ├── contact.jsx
│   │   ├── LandingPage.jsx
│   │   ├── myInfo.jsx
│   │   ├── options.jsx
│   │   ├── personalInfo.jsx
│   │   ├── projects.jsx
│   │   └── skills.jsx
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Components

- **LandingPage** - Main landing page component
- **MyInfo** - Personal information section
- **PersonalInfo** - Detailed personal information
- **Skills** - Skills showcase section
- **Projects** - Portfolio projects display
- **Contact** - Contact information section
- **Options** - Navigation or menu options

## Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

## License

This project is open source and available under the MIT License.
