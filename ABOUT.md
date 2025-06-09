# About Consent Love Monorepo

## Project Overview
Consent Love is a modern web platform built as a monorepo that combines a content management system (CMS) with a frontend application. The project is designed to manage and display consent-related content in an efficient and maintainable way.

## Architecture
The project follows a monorepo structure using PNPM workspaces, which allows for better code sharing and dependency management between different parts of the application. The architecture consists of:

### Applications
- **Love Studio** (`apps/love-studio/`): A Sanity Studio CMS instance built with TypeScript, providing a powerful content management interface.
- **Love Astro** (`apps/love-astro/`): A modern frontend application built with Astro, serving as the public-facing website that consumes content from the CMS.

### Shared Packages
- **UI Package** (`packages/ui/`): Contains shared UI components and styles used across the applications.
- **Shared Schema** (`packages/sharedSchema/`): Houses shared Sanity schema definitions to maintain consistency between the CMS and frontend.

## Technical Stack
- **Package Manager**: PNPM (v10.11.0+)
- **Runtime**: Node.js (Latest LTS version)
- **Frontend Framework**: Astro
- **CMS**: Sanity Studio
- **Language**: TypeScript
- **Build System**: Moon (monorepo tooling)

## Development Workflow
The project uses modern development practices:
- Concurrent development servers for both applications
- Shared code through workspace packages
- TypeScript for type safety
- Modular architecture for better maintainability

## Project Status
The project is currently in active development, with ongoing work on:
- Initial setup of both Astro frontend and Sanity Studio
- Development environment configuration
- Documentation and testing infrastructure
- Core feature implementation

## Future Plans
The project roadmap includes:
- Implementation of core features
- Comprehensive testing suite
- CI/CD pipeline setup
- Performance optimization
- Security audits
- User feedback integration

## Contributing
The project welcomes contributions. Please refer to the project's documentation for guidelines on:
- Setting up the development environment
- Code style and standards
- Pull request process
- Testing requirements

## License
This project is licensed under the ISC License. 