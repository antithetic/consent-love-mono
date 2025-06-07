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

- Random and configurable periodic background changes via the `changeInterval` prop
- Seamless image switching without page reload

## Usage

To use the random background on your Astro page:

```astro
---
import RandomBackground from '@components/RandomBackground.astro'
---

<!-- Basic usage without periodic changes -->
<RandomBackground />

<!-- With periodic changes every 5 seconds -->
<RandomBackground changeInterval={5000} />
```

## Configuration

### Component Props

The component accepts the following props:

- `changeInterval` (optional): Number of milliseconds between background changes. Set to 0 or omit to disable periodic changes.

### Adding New Background Images

To add new background images:

1. Add the new image to the `src/assets/bg/` directory
2. Import the image at the top of the component
3. Add the image source to the `imageUrls` array

Example:

```astro
import newBg from '@assets/bg/background-04.webp'
```

```astro
const imageUrls = [ bg1.src, bg2.src, bg3.src, newBg.src, ]
```

### Periodic Background Changes

To enable periodic background changes, simply pass the desired interval in milliseconds to the `changeInterval` prop:

```astro
<!-- Change background every 5 seconds -->
<RandomBackground changeInterval={5000} />

<!-- Change background every 30 seconds -->
<RandomBackground changeInterval={30000} />

<!-- Disable periodic changes -->
<RandomBackground changeInterval={0} />
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
   - For decorative backgrounds, it is recommended to use alt="" (empty alt) and aria-hidden="true" rather than a non-empty alt text.

## Future Enhancements

### Dynamic Background Loading

A planned enhancement will allow the component to automatically load and manage background images from the `@assets/bg/` directory without manual imports.

#### Implementation Roadmap

1. **File System Integration**

   - Use Astro's `import.meta.glob` to dynamically import all images from the bg directory
   - Filter for supported image formats (WebP, PNG, JPG)
   - Create a utility function to handle the file loading in `src/utils/backgroundLoader.ts`

2. **Component Updates**

   - Modify `src/components/RandomBackground.astro` to use dynamic imports
   - Add error handling for missing or invalid images
   - Implement a fallback to default images if the directory is empty

3. **Performance Optimizations**
   - Implement lazy loading for images
   - Add image preloading for smoother transitions
   - Cache loaded image paths

#### Example Implementation Structure

```typescript
// src/utils/backgroundLoader.ts
async function loadBackgroundImages() {
  const images = import.meta.glob('@assets/bg/*.{webp,png,jpg,jpeg}')
  const loadedImages = []

  for (const path in images) {
    const image = await images[path]()
    loadedImages.push(image.default)
  }

  return loadedImages
}

// src/components/RandomBackground.astro
<RandomBackground autoLoad={true} />
```

#### Tasks Checklist

- [ ] Create utility function for dynamic image loading in `src/utils/backgroundLoader.ts`
- [ ] Add support for multiple image formats
- [ ] Implement error handling and fallbacks
- [ ] Add image preloading mechanism
- [ ] Update `src/components/RandomBackground.astro` props to support auto-loading
- [ ] Add documentation for new features
- [ ] Create tests for dynamic loading
- [ ] Add performance benchmarks
- [ ] Implement caching strategy
- [ ] Add loading state handling

#### Best Practices for Image Management

1. **File Organization**

   - Keep all background images in the `src/assets/bg/` directory
   - Use consistent naming convention (e.g., `background-01.webp`)
   - Include the image dimensions in the filename (e.g., `background-01-1920x1080.webp`)

2. **Image Requirements**

   - Use WebP format for optimal performance
   - Maintain consistent aspect ratios
   - Optimize images for web use
   - Keep file sizes reasonable (recommended < 500KB per image)

3. **Directory Structure**
   ```
   src/
   ├── assets/
   │   └── bg/
   │       ├── background-01.webp
   │       ├── background-02.webp
   │       └── ...
   ├── components/
   │   └── RandomBackground.astro
   └── utils/
       └── backgroundLoader.ts
   ```

#### Migration Guide

When implementing this feature, existing code will need to be updated:

1. Remove manual image imports from `src/components/RandomBackground.astro`
2. Update component props to include `autoLoad` option
3. Update any custom image URL arrays to use the new loading mechanism
4. Test with various image formats and sizes

#### Performance Considerations

- Implement lazy loading for images not immediately needed
- Consider using a CDN for better image delivery
- Implement proper caching headers
- Monitor memory usage with large numbers of images
- Consider implementing a maximum number of loaded images

#### Accessibility Updates

- Ensure proper alt text generation for dynamic images
- Maintain aria-hidden attributes for decorative backgrounds
- Consider adding a way to disable dynamic loading for users with limited bandwidth

This enhancement will make the component more maintainable and easier to use, while maintaining performance and accessibility standards.
