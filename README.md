# Consent Love Monorepo

This is a monorepo project that combines a Sanity Studio CMS (love-studio) with an Astro-based frontend (love-astro) for managing and displaying consent-related content.

## Project Structure

```
consent-love-mono/
├── apps/
│   ├── love-studio/     # Sanity Studio CMS
│   └── love-astro/      # Astro-based frontend
├── packages/            # Shared packages
│   ├── ui/             # Shared UI components and styles
│   └── sharedSchema/   # Shared Sanity schema definitions
└── pnpm-workspace.yaml  # PNPM workspace configuration
```

## Prerequisites

- Node.js (Latest LTS version recommended)
- PNPM (v10.11.0 or later)

## Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start the development servers:
   ```bash
   pnpm dev
   ```
   This will concurrently start both the Sanity Studio and Astro development servers.

## Applications

### Love Studio (Sanity CMS)
- Located in `apps/love-studio`
- A Sanity Studio instance for content management
- Built with TypeScript
- Customized schema and configuration

### Love Astro
- Located in `apps/love-astro`
- Frontend application built with Astro
- Serves as the public-facing website
- Consumes content from Sanity CMS

## Development

The project uses PNPM workspaces for managing multiple packages and applications. The main development script runs both applications concurrently for a seamless development experience.

## License

ISC
