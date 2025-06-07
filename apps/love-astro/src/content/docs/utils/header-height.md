# Header Height Utility

## Overview

The Header Height Utility (`headerHeight.ts`) provides dynamic management of the header's height in the Love Hangover website. It automatically calculates and updates the header's height based on its actual content, ensuring proper spacing and layout for fixed sections below the header.

## Features

- ✅ **Dynamic Height Calculation**: Automatically measures actual header height
- ✅ **Responsive Updates**: Handles window resize and orientation changes
- ✅ **Mobile Support**: Special handling for device orientation changes
- ✅ **Clean Integration**: Works seamlessly with Astro's page navigation
- ✅ **TypeScript Support**: Full type safety and IntelliSense support

## Implementation

### Core Functions

#### `updateHeaderHeight()`

```typescript
export function updateHeaderHeight(): void{
const header = document.querySelector('header');
if (!header) return;
const { height, top } = header.getBoundingClientRect();
document.documentElement.style.setProperty(
  '--header-height',
  `${height + top}px`
);
}
```

Calculates the current header height and updates the CSS variable:

- Includes padding and border in calculations (boundingClientRect measures the border-box, not margins)
- Includes margins and padding in calculations
- Updates the `--header-height` CSS variable

#### `initHeaderHeight()`

```typescript
export function initHeaderHeight(): void
```

Initializes header height management:

- Performs initial height calculation
- Sets up resize event listener
- Configures orientation change handling for mobile devices

#### `cleanupHeaderHeight()`

```typescript
export function cleanupHeaderHeight(): void
```

Cleans up event listeners:

- Removes resize listener
- Removes orientation change listener
- Called during page navigation

## Usage

### Basic Integration

The utility is automatically integrated into the main Layout component:

```astro
<script>
  import { initHeaderHeight, cleanupHeaderHeight } from '@utils/headerHeight'

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', initHeaderHeight)

  // Handle Astro page navigation
  document.addEventListener('astro:before-swap', cleanupHeaderHeight)
  document.addEventListener('astro:after-swap', initHeaderHeight)
</script>
```

### CSS Integration

The header height is exposed as a CSS variable:

```css
header {
  --header-height: 18rem; /* Default fallback value */
}

.fixed-section__header {
  top: var(--header-height);
}
```

## Technical Details

### Height Calculation

The utility calculates the total header height by:

1. Getting the header element's bounding rectangle
2. Including both height and top offset
3. Converting to pixels for precise positioning

### Event Handling

The utility manages three main events:

1. **Initial Load**: Calculates height when page loads
2. **Resize**: Updates height when window size changes
3. **Orientation Change**: Updates height on mobile device rotation

### Performance Considerations

- Uses `getBoundingClientRect()` for accurate measurements
- Handles resize events directly (consider adding debouncing for performance)
- Includes small delay for orientation changes to ensure DOM updates
- Properly cleans up event listeners to prevent memory leaks

## Best Practices

1. **Default Values**: Always provide a default CSS variable value as fallback
2. **Mobile Testing**: Test on various devices and orientations
3. **Performance**: Monitor for any performance impact during rapid resizing
4. **Error Handling**: Ensure graceful fallback if header element is not found

## Common Use Cases

- **Responsive Headers**: Headers that change height based on content
- **Fixed Navigation**: Sticky headers with dynamic spacing
- **Mobile Layouts**: Proper spacing on mobile devices
- **Dynamic Content**: Headers with changing content (e.g., notifications)

## Troubleshooting

### Header Height Not Updating

If the header height isn't updating properly:

1. Check if the header element exists in the DOM
2. Verify CSS variable is being set correctly
3. Ensure no CSS is overriding the variable

### Mobile Issues

For mobile-specific problems:

1. Test on different devices and orientations
2. Check if orientation change handler is firing
3. Verify timing of height updates

### Performance Issues

If experiencing performance problems:

1. Monitor resize event frequency
2. Check for memory leaks
3. Verify cleanup is working properly

## Example Implementation

```typescript
// Basic usage
import { initHeaderHeight } from '@utils/headerHeight'

// Initialize on page load
document.addEventListener('DOMContentLoaded', initHeaderHeight)

// Manual update if needed
import { updateHeaderHeight } from '@utils/headerHeight'
updateHeaderHeight()
```

## Related Components

- `Layout.astro` - Main layout component using the utility
- `FixedSection.astro` - Components that depend on header height
- `global.css` - CSS variables and styling

## Future Improvements

Potential enhancements:

- Add debouncing for resize events to improve performance
- Implement smooth height change animations during transitions
- Add support for multiple header elements or complex header structures
- Create framework-agnostic versions for React/Vue applications
