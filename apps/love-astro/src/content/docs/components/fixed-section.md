# FixedSection Component Documentation

## Overview

The `FixedSection` component is a reusable Astro component that creates a fixed header section positioned at the top of the page. It remains visible while users scroll and provides a clean, professional appearance with customizable styling options.

## Features

- **Fixed Positioning**: Stays at the top of the viewport during scroll
- **Automatic ID Generation**: Generates unique IDs when none provided
- **Tailwind CSS Integration**: Accepts custom classes for styling
- **Responsive Design**: Built-in responsive container
- **Accessibility Ready**: Proper semantic structure and ID attribution
- **Self-Contained**: Works in isolation without external dependencies

## Props

| Prop    | Type     | Required | Default            | Description                                                       |
| ------- | -------- | -------- | ------------------ | ----------------------------------------------------------------- |
| `class` | `string` | No       | `undefined`        | Custom Tailwind CSS classes to override or extend default styling |
| `id`    | `string` | No       | `section-[random]` | Custom ID for the section element. Auto-generates if not provided |

## Usage Examples

### Basic Usage

```astro
---
import FixedSection from '@components/FixedSection.astro'
---

<FixedSection>
  <div>My Website</div>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</FixedSection>
```

### With Custom Styling

```astro
<FixedSection class="border-blue-700 bg-blue-600 text-white">
  <h1 class="text-xl font-bold">Brand Name</h1>
  <nav class="space-x-4">
    <a href="/" class="hover:text-blue-200">Home</a>
    <a href="/services" class="hover:text-blue-200">Services</a>
    <a href="/contact" class="hover:text-blue-200">Contact</a>
  </nav>
</FixedSection>
```

### With Custom ID

```astro
<FixedSection id="main-navigation" class="bg-gray-900 text-white">
  <div class="flex items-center space-x-2">
    <img src="/logo.png" alt="Logo" class="h-8 w-8" />
    <span class="font-semibold">Company</span>
  </div>
  <button class="md:hidden">☰</button>
</FixedSection>
```

## Default Styling

The component comes with sensible defaults:

- **Position**: Fixed at top with `z-index: 50`
- **Background**: White with subtle shadow and border
- **Layout**: Flexbox container with space-between alignment
- **Spacing**: Container padding and responsive margins
- **Body Offset**: Automatic 4rem top padding to prevent content overlap

## Customization

### Overriding Default Styles

Use Tailwind utility classes to customize appearance:

```astro
<!-- Dark theme header -->
<FixedSection class="border-gray-700 bg-gray-800 text-white shadow-lg">
  <!-- content -->
</FixedSection>

<!-- Transparent header -->
<FixedSection class="border-transparent bg-transparent backdrop-blur-sm">
  <!-- content -->
</FixedSection>

<!-- Colored header with custom height -->
<FixedSection class="bg-gradient-to-r from-purple-600 to-blue-600 py-6">
  <!-- content -->
</FixedSection>
```

### Adjusting Body Padding

If you need different spacing, modify the global CSS:

```astro
<FixedSection class="py-6">
  <!-- Taller header -->
  <!-- content -->
</FixedSection>

<style is:global>
  body {
    padding-top: 6rem; /* Adjust to match taller header */
  }
</style>
```

## Technical Details

### ID Generation

When no `id` prop is provided, the component generates a unique identifier:

- Format: `section-[randomString]`
- Random string: 9-character alphanumeric
- Example: `section-k7x9m2p1q`

### CSS Architecture

- Uses Tailwind utility classes for styling
- Includes global body padding to prevent content overlap
- Fixed positioning with high z-index for proper layering
- Responsive container with automatic margins

### Browser Compatibility

- Works in all modern browsers
- Fixed positioning support required
- CSS Grid/Flexbox support recommended

## Best Practices

1. **Content Structure**: Use semantic elements within the slot (nav, h1, etc.)
2. **Responsive Design**: Test header on different screen sizes
3. **Color Contrast**: Ensure text meets accessibility standards
4. **Navigation**: Include proper ARIA labels for navigation elements
5. **Performance**: Keep header content lightweight for smooth scrolling

## Common Use Cases

- **Main Site Navigation**: Primary website header with logo and menu
- **Dashboard Headers**: Application toolbars and navigation bars
- **Marketing Pages**: Landing page headers with CTAs
- **Documentation**: Fixed navigation for docs sites
- **E-commerce**: Shopping cart and user account access

## Troubleshooting

### Content Hidden Behind Header

If content appears behind the header, adjust the global body padding:

```css
:global(body) {
  padding-top: 5rem; /* Increase as needed */
}
```

### Z-Index Issues

If other elements appear above the header, increase the z-index:

```astro
<FixedSection class="z-[60]"> <!-- Higher z-index --></FixedSection>
```

### Responsive Issues

For mobile-specific styling:

```astro
<FixedSection class="px-2 py-2 md:px-4 md:py-3">
  <!-- Mobile-optimized content -->
</FixedSection>
```
