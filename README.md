# Pharma Website Project

Welcome to the Pharma Website project! This project is aimed at providing a platform where users can find information about doctors, choose a doctor, and book appointments based on available time slots.

## Setup Instructions

1. **Clone the Repository:** Begin by cloning the repository to your local machine using the following command:
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to Project Directory:** Once cloned, navigate to the project directory:
   ```bash
   cd geetha_s_application-v1-0.2
   ```

3. **Install Dependencies:** Install project dependencies using npm or yarn:
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the Application:** After installing dependencies, you can run the application locally using:
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Access the Website:** Once the application is running, you can access it in your browser at `http://localhost:3000`.

## Folder Structure

```
.
├── package.json
├── postcss.config.js
├── public
│   ├── assets
│   │   ├── images --------- All Project Images
│   │   └── fonts ---------- Project fonts
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── README.md
├── src
│   ├── App.jsx
│   ├── components --------- UI and Detected Common Components
│   ├── constants ---------- Project constants
│   ├── hooks -------------- Helpful Hooks
│   ├── index.jsx
│   ├── pages -------------- All route pages
│   ├── Routes.jsx ---------- Routing
│   ├── styles
│   │   ├── index.css ------ Other Global Styles
│   │   └── tailwind.css --- Default Tailwind modules
│   └── util
│       └── index.jsx ------- Helpful utils
└── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

## Description

The project structure is organized to maintain clarity and modularity. Here's a brief overview of each directory:

- **public:** Contains static assets such as images, fonts, and the main HTML file.
- **src:** Contains the source code for the application.
  - **components:** Houses UI components and commonly used components.
  - **constants:** Contains project constants.
  - **hooks:** Includes custom React hooks for reusable logic.
  - **pages:** Contains route pages.
  - **styles:** Holds CSS files for global styles and Tailwind CSS modules.
  - **util:** Contains utility functions.
- **tailwind.config.js:** Configuration file for Tailwind CSS.
