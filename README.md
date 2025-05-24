# Translatitem

An application to translate your business content, built with modern web technologies.

## Project Overview

This project is a full-stack web application that consists of:

- A Python FastAPI backend for handling translation services
- A React frontend for the user interface
- Playwright for end-to-end testing

## Tech Stack

### Backend (Python/FastAPI)

- FastAPI framework
- Uvicorn ASGI server
- OpenAI integration for translations
- Virtual environment for dependency management

### Frontend (React)

- React
- Modern UI components
- Responsive design
- Playwright for automated testing

## Getting Started

### Backend Setup

1. Navigate to the project root
2. Create and activate the virtual environment:
   ```bash
   source backend-venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r backend/requirements.txt
   ```
4. Start the server:
   ```bash
   cd backend
   uvicorn main:app --reload
   ```
   The backend will be available at http://127.0.0.1:8000

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

Available npm commands:

- Start the development server:

  ```bash
  npm start
  ```

  The frontend will be available at http://localhost:3000

- Build the application for production:

  ```bash
  npm run build
  ```

- Run unit tests:

  ```bash
  npm test
  ```

- Start the MCP server for Copilot integration:

  ```bash
  npm run start:mcp
  ```

- Eject from Create React App (⚠️ one-way operation):
  ```bash
  npm run eject
  ```

## Testing

The project uses Playwright for end-to-end testing. Tests are located in `/frontend/tests/`.

### Running Tests

To run the tests:

```bash
cd frontend
npx playwright test
```

You can also run tests with UI mode:

```bash
npx playwright test --ui
```

### MCP Playwright Server

To start the MCP Playwright server (used only for GitHub Copilot integration), use the preconfigured npm script:

```bash
npm run start:mcp
```

This will start the MCP server at http://localhost:8931. The server is specifically configured for GitHub Copilot to interact with Playwright tests. No other client configuration is needed - this is exclusively for Copilot's automated testing capabilities.

## Development

- Backend runs with hot-reload enabled for quick development
- Frontend uses React's development server with hot module replacement
- MCP (Model Context Protocol) is integrated for automated testing and web interactions

## Additional Information

- The backend API documentation is available at http://127.0.0.1:8000/docs when the server is running
- The project uses environment variables for configuration (check .env files)
- Both frontend and backend include proper error handling and logging

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

---

For more detailed information about specific components, please check the respective directories' documentation.
