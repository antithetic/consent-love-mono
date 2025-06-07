# Random Background Implementation

This document describes the random background implementation in the Love Astro application.

## Overview

The random background feature provides a dynamic background system that can display and manage multiple background images. The implementation consists of a single component that handles both the display and randomization of background images.

## Component Details

### RandomBackground.astro

The `RandomBackground` component is responsible for:

- Displaying a full-screen background image
- Randomly selecting a background image on page load
- Supporting optional periodic background changes
- Managing background image transitions

## Features

### Image Management

- Supports multiple background images (currently configured for 3 images)
- Images are imported directly from the assets directory
- Uses WebP format for optimal performance
- Images are displayed with proper object-fit cover for full-screen coverage

### Randomization

- Randomly selects a background image on initial page load
- Optional periodic background changes (commented out by default)
- Seamless image switching without page reload

## Usage

To use the random background in your Astro page:

```astro
---
import RandomBackground from '../components/RandomBackground.astro'
---

<RandomBackground />
```

## Configuration

### Adding New Background Images

To add new background images:

1. Add the new image to the `src/assets/bg/` directory
2. Import the image at the top of the component
3. Add the image source to the `imageUrls` array

Example:

```astro
import newBg from '../assets/bg/background-04.webp' const imageUrls = [bg1.src,
bg2.src, bg3.src, newBg.src]
```

### Periodic Background Changes

To enable periodic background changes:

1. Uncomment the `setInterval` line in the script section
2. Adjust the interval time (currently set to 5000ms = 5 seconds)

```javascript
setInterval(setRandomBackground, 5000) // Changes background every 5 seconds
```

## Styling

The background is styled with the following properties:

- Fixed positioning (`fixed`)
- Full viewport coverage (`inset-0`)
- Negative z-index (`-z-10`) to ensure it stays behind other content
- Full height and width (`h-full w-full`)
- Object-fit cover for proper image scaling (`object-cover`)

## Best Practices

1. **Image Optimization**

   - Use WebP format for better performance
   - Optimize images for web use
   - Consider using responsive images for different screen sizes

2. **Performance**

   - Keep the number of background images reasonable
   - Consider lazy loading for additional images
   - Monitor memory usage when using periodic changes

3. **Accessibility**
   - Always include alt text for background images
   - Consider providing a way to disable background changes for users with motion sensitivity
