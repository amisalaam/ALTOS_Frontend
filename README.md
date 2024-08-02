
# Event Management Frontend

This is the frontend for the Event Management System, built with React, Vite, and Tailwind CSS. The application allows users to view, register, and manage events.

## Features

- **Responsive Design**: Built with Tailwind CSS for a responsive and modern UI.
- **Fast Development**: Powered by Vite for a fast development experience.
- **Event Management**: Users can view and register for events.
- **User Authentication**: Integration with the backend for secure user authentication.

## Installation

Follow these steps to set up the project on your local machine:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/event-management-frontend.git
   cd event-management-frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Create a `.env` file:**
   Create a `.env` file in the root directory and add your API URL:
   ```
   VITE_API_URL=http://127.0.0.1:8000
   ```

## Setup

### Tailwind CSS Configuration

Tailwind CSS is already configured in the project. If you need to customize the configuration, you can modify the `tailwind.config.js` file.

### Vite Configuration

Vite is used for development and build. The configuration is set in `vite.config.js`.

## Usage

### Running the Development Server

To start the development server, run:
```sh
npm run dev
```

Visit `http://127.0.0.1:5173` to view the application.


### Preview the Production Build

To preview the production build locally, run:
```sh
npm run dev
```

## Project Structure

```
event-management-frontend/
├── public/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .env
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── ...
```

```

Replace placeholders like `yourusername` and `yourname` with your actual details. This `README.md` provides a comprehensive guide to setting up, developing, and contributing to the frontend project.
