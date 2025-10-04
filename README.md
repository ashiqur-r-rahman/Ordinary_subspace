# OrbitX - Smart Satellite Network with Integrated AI

## Project Overview

OrbitX delivers on-orbit AI processing to reduce satellite data costs by 70% and provide sub-hour alerts for commercial operations in LEO. Our innovative satellite network features integrated LLMs for intelligent, cost-effective space operations.

## Features

- **On-Orbit AI Processing**: Integrated LLMs process imagery in space, sending only actionable insights
- **Real-Time Alerts**: Sub-hour notifications with median response time of 15 minutes  
- **Massive Data Reduction**: Reduce downlink from 100MB to 0.7MB—cutting costs by up to 70%
- **Interactive 3D Satellite Model**: Built with Three.js and React Three Fiber
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Optimized for all device sizes

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd ordinary_subspace

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Building for Production

```sh
# Build the project for production
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── *.tsx           # Feature components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets (images, etc.)
└── main.tsx            # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
