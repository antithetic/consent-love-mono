# SpotifyPlaylist Component

A flexible Astro component for embedding Spotify playlists with TypeScript support, responsive design, and Tailwind CSS integration.

## Features

- ✅ **Flexible Input**: Accepts either playlist IDs or full Spotify share URLs
- ✅ **Responsive Design**: Automatically adapts to mobile screens
- ✅ **Compact Mode**: Supports Spotify's compact embed format
- ✅ **Theme Support**: Light and dark theme options
- ✅ **Tailwind Integration**: Custom styling with Tailwind CSS classes
- ✅ **TypeScript**: Full type safety and IntelliSense support
- ✅ **Performance**: Lazy loading and optimized iframe attributes

## Installation

1. Save the component as `src/components/SpotifyPlaylist.astro`
2. No additional dependencies required - works with your existing Astro + TypeScript + pnpm setup

## Basic Usage

### Using a Spotify Share URL

```astro
---
import SpotifyPlaylist from '../components/SpotifyPlaylist.astro'
---

<SpotifyPlaylist
  playlistUrl="https://open.spotify.com/playlist/47b3JV89sKcL6dkC3bMO6p?si=tcToFt5LSvW_4FedcHpT6w"
/>
```

### Using a Playlist ID

```astro
<SpotifyPlaylist playlistId="47b3JV89sKcL6dkC3bMO6p" />
```

## Props

| Prop             | Type                 | Default                           | Description                            |
| ---------------- | -------------------- | --------------------------------- | -------------------------------------- |
| `playlistId`     | `string?`            | -                                 | Direct Spotify playlist ID             |
| `playlistUrl`    | `string?`            | -                                 | Full Spotify playlist share URL        |
| `width`          | `number \| string?`  | `352` (full) / `"100%"` (compact) | Width of the embed                     |
| `height`         | `number \| string?`  | `632` (full) / `152` (compact)    | Height of the embed                    |
| `theme`          | `'light' \| 'dark'?` | `'dark'`                          | Spotify embed theme                    |
| `showCoverArt`   | `boolean?`           | `true`                            | Whether to display playlist cover art  |
| `compact`        | `boolean?`           | `false`                           | Use compact embed mode                 |
| `class`          | `string?`            | -                                 | Tailwind classes for the iframe        |
| `containerClass` | `string?`            | -                                 | Tailwind classes for the container div |

> **Note**: Either `playlistId` or `playlistUrl` must be provided.

## Examples

### Compact Embed

Perfect for sidebars or smaller spaces:

```astro
<SpotifyPlaylist
  playlistUrl="https://open.spotify.com/playlist/47b3JV89sKcL6dkC3bMO6p?si=tcToFt5LSvW_4FedcHpT6w"
  compact={true}
/>
```

### Custom Styling with Tailwind

```astro
<!-- Styled iframe with shadow and hover effects -->
<SpotifyPlaylist
  playlistUrl="https://open.spotify.com/playlist/47b3JV89sKcL6dkC3bMO6p?si=tcToFt5LSvW_4FedcHpT6w"
  class="rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
/>

<!-- Centered container with background -->
<SpotifyPlaylist
  playlistUrl="https://open.spotify.com/playlist/47b3JV89sKcL6dkC3bMO6p?si=tcToFt5LSvW_4FedcHpT6w"
  containerClass="flex justify-center items-center p-8 bg-gray-100 rounded-lg"
  class="drop-shadow-lg"
/>
```

### Responsive Design

```astro
<SpotifyPlaylist
  playlistUrl="https://open.spotify.com/playlist/47b3JV89sKcL6dkC3bMO6p?si=tcToFt5LSvW_4FedcHpT6w"
  containerClass="w-full md:w-1/2 lg:w-1/3 mx-auto"
  class="h-auto w-full"
/>
```

### Light Theme

```astro
<SpotifyPlaylist
  playlistUrl="https://open.spotify.com/playlist/47b3JV89sKcL6dkC3bMO6p?si=tcToFt5LSvW_4FedcHpT6w"
  theme="light"
  containerClass="bg-white p-4 rounded-lg shadow-sm"
/>
```

### Custom Dimensions

```astro
<SpotifyPlaylist
  playlistId="47b3JV89sKcL6dkC3bMO6p"
  width={400}
  height={500}
  showCoverArt={false}
/>
```

## Getting Playlist URLs

1. Open Spotify (web or desktop app)
2. Navigate to your desired playlist
3. Click the three dots menu (⋯)
4. Select "Share" → "Copy link to playlist"
5. Use the copied URL directly in the `playlistUrl` prop

Example URLs:

- `https://open.spotify.com/playlist/47b3JV89sKcL6dkC3bMO6p`
- `https://open.spotify.com/playlist/47b3JV89sKcL6dkC3bMO6p?si=tcToFt5LSvW_4FedcHpT6w`

Both formats work - the component automatically strips query parameters.

## Responsive Behavior

The component includes built-in responsive design:

- **Desktop**: Uses specified dimensions or defaults
- **Mobile** (≤768px): Automatically scales to 100% width
- **Compact Mode**: Always uses 100% width with 152px height
- **Min Height**: Ensures minimum 152px height for usability

## Browser Support

The component uses modern iframe features:

- `loading="lazy"` for performance
- Comprehensive `allow` permissions for Spotify functionality
- `frameBorder="0"` for clean appearance
- Rounded corners with CSS `border-radius`

## Performance Considerations

- **Lazy Loading**: iframes load only when visible
- **Optimized Attributes**: Minimal required permissions
- **CSS Optimization**: Efficient responsive styles
- **URL Processing**: Clean URL construction without unnecessary parameters

## Troubleshooting

### Common Issues

**"Either playlistId or playlistUrl must be provided" Error**

- Ensure you pass either `playlistId` or `playlistUrl` prop
- Check that your playlist URL is valid

**Playlist Not Loading**

- Verify the playlist is public (private playlists won't embed)
- Check that the playlist ID is correct
- Ensure the playlist still exists on Spotify

**Styling Issues**

- Remember that iframe styling can be limited by browser security
- Use `containerClass` for outer styling, `class` for iframe-specific styles
- Some CSS properties may not work on iframes due to cross-origin restrictions

### Tips

- Use `compact={true}` for better mobile experience in tight spaces
- The `dark` theme generally looks better on most websites
- Consider using `containerClass` for layout and `class` for visual effects
- Test responsive behavior across different screen sizes

## TypeScript Support

The component includes full TypeScript definitions:

```typescript
interface Props {
  playlistId?: string
  playlistUrl?: string
  width?: number | string
  height?: number | string
  theme?: 'light' | 'dark'
  showCoverArt?: boolean
  compact?: boolean
  class?: string
  containerClass?: string
}
```

Your IDE will provide autocomplete and type checking for all props.
