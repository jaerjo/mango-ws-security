
# Mango WS Security Culture Project

A comprehensive cybersecurity presentation for Mango WS, focusing on establishing strong security culture and cyber resilience in a wearable tech startup. This project serves as both a portfolio piece and a practical demonstration of cybersecurity concepts.

## Project Overview

This interactive presentation covers four main areas:
- Introduction to cybersecurity importance for wearable tech
- Building a strong security culture
- Implementing cyber resilience
- Action plan and next steps

## Live Demo

You can view the live project at [your-github-pages-url] (if you choose to deploy it)

## Screenshots

[Consider adding screenshots of key sections here]

## Technologies Used

- React 18
- Tailwind CSS
- Lucide React Icons
- Vite

## Project Setup History

This project was built step by step:

1. Initial Setup:
```bash
# Create project directory and initialize
git clone https://github.com/your-username/mango-ws-security.git
cd mango-ws-security

# Initialize project with Vite
npm create vite@latest . -- --template react
npm install

# Install dependencies
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configure Tailwind CSS by updating:
- tailwind.config.js
- src/index.css

3. Create component structure:
```
src/
├── components/
│   └── presentation/
│       ├── Introduction.jsx
│       ├── SecurityCulture.jsx
│       ├── CyberResilience.jsx
│       └── GoingForward.jsx
└── App.jsx
```

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/mango-ws-security.git
cd mango-ws-security
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## Development Process

This project was developed through several phases:

1. **Planning Phase**
   - Defined four key presentation sections
   - Outlined content structure
   - Determined technology stack

2. **Implementation Phase**
   - Set up React with Vite
   - Implemented component-based architecture
   - Created responsive design with Tailwind CSS

3. **Refinement Phase**
   - Enhanced UI/UX
   - Added animations and transitions
   - Improved responsive behavior

## Project Structure

```
mango-ws-security/
├── src/
│   ├── components/
│   │   └── presentation/
│   │       ├── Introduction.jsx
│   │       ├── SecurityCulture.jsx
│   │       ├── CyberResilience.jsx
│   │       └── GoingForward.jsx
│   ├── App.jsx
│   └── index.css
├── public/
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

## Features

- Interactive navigation between sections
- Responsive design for all screen sizes
- Modern, clean UI with consistent styling
- Smooth transitions and animations
- Comprehensive cybersecurity content

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to the React and Tailwind CSS communities
- Inspired by real-world cybersecurity challenges in wearable tech
- Built as part of a cybersecurity learning journey