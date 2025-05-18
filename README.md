# Integrated Sidebar App

A React-based sidebar application that integrates with OpenWebUI.

## Prerequisites

- Docker
- Docker Compose

## Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd integrated-sidebar-app
```

2. Build and start the containers:
```bash
docker-compose up --build
```

The application will be available at:
- Sidebar app: http://localhost
- OpenWebUI: http://localhost/openwebui

## Environment Variables

You can configure the application using the following environment variables:

- `WEBUI_SECRET_KEY`: Secret key for OpenWebUI (default: t0p-s3cr3t)
- `WEBUI_URL`: URL for OpenWebUI (default: http://localhost:8080)

## Development

To run the application in development mode:

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

## Building

To build the application:

```bash
npm run build
```

## Testing

To run tests:

```bash
npm test
```

## Docker Commands

- Build the images:
```bash
docker-compose build
```

- Start the services:
```bash
docker-compose up
```

- Stop the services:
```bash
docker-compose down
```

- View logs:
```bash
docker-compose logs -f
```

## Architecture

The application consists of two main services:

1. **Sidebar App**: A React application served by Nginx
2. **OpenWebUI**: The backend service for the sidebar functionality

The services communicate through a Docker network and are configured to use health checks to ensure proper startup order.