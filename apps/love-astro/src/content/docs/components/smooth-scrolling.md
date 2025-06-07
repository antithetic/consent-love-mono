# Smooth Scrolling Implementation

This document describes the smooth scrolling implementation in the Love Astro application using the Lenis library.

## Overview

The smooth scrolling feature is implemented using the [Lenis](https://github.com/studio-freight/lenis) library, which provides a performant and customizable smooth scrolling experience. The implementation consists of two main parts:

1. A utility module (`lenis.ts`) that manages the Lenis instance
2. A client-side component (`SmoothScroll.astro`) that handles initialization and cleanup

## Components

### SmoothScroll.astro

The `SmoothScroll` component is responsible for:

- Initializing smooth scrolling on initial page load
- Reinitializing smooth scrolling after Astro page navigation
- Handling cleanup and error cases

### Lenis Utilities (lenis.ts)

The Lenis utilities provide three main functions:

#### `initLenis()`

Initializes the Lenis instance with custom configuration:

- Duration: 1.2 seconds
- Easing: Exponential out easing
- Touch multiplier: 2x
- Infinite scrolling: Disabled

#### `getLenis()`

Retrieves the current Lenis instance for external use.

#### `destroyLenis()`

Cleans up the Lenis instance and animation frames. Should be called before reinitializing or when the component unmounts.

## Usage

The smooth scrolling is automatically initialized when the `SmoothScroll` component is included in your Astro page. No additional configuration is needed.

```astro
---
import SmoothScroll from '../components/SmoothScroll.astro'
---

<SmoothScroll />
```

## Configuration

The current configuration provides a smooth, natural-feeling scroll with:

- Moderate duration (1.2s)
- Exponential easing for natural deceleration
- Enhanced touch sensitivity for mobile devices

To modify these settings, update the configuration object in the `initLenis()` function in `lenis.ts`.

## Error Handling

The implementation includes error handling for both initial load and page navigation scenarios. Any initialization failures are logged to the console with a warning message.
