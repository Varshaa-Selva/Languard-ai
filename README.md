# LandGuard AI

Intelligent Land Verification System

## About

LandGuard AI is a comprehensive system for land ownership verification and construction monitoring. It combines OCR technology for document processing, satellite imagery analysis, and blockchain-based record keeping to ensure regulatory compliance.

## Features

- **Document Processing**: OCR extraction from land ownership and building plan documents
- **Compliance Checking**: Automated verification against regulatory requirements
- **Satellite Monitoring**: Before/after image comparison for construction tracking
- **Risk Assessment**: Composite scoring for unauthorized construction detection
- **Blockchain Integration**: Immutable record keeping with SHA-256 hashing
- **Admin Dashboard**: Comprehensive audit trail and reporting

## Technologies Used

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd landguard-ai

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server with auto-reloading and an instant preview
npm run dev
```

### Development

- Run `npm run dev` for development server
- Run `npm run build` to build for production
- Run `npm run test` to run tests
- Run `npm run lint` to check code quality

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── *.tsx           # Feature components
├── pages/              # Page components
├── lib/                # Utility functions and data
├── assets/             # Images and static assets
└── hooks/              # Custom React hooks
```

## Deployment

Build the project for production:

```sh
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
