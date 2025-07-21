# Logo Implementation Documentation

This document describes the logo implementation for the W3nity platform.

## Features Implemented

### 1. Logo Assets
- **`/public/logo.svg`**: Main colorful logo with gradient design
- **`/public/logo-mono.svg`**: Monochrome version for footer usage
- Both logos feature the W3nity brand with lightning bolt and connected nodes representing Web3 unity

### 2. Logo Component (`/src/components/Logo.tsx`)
A reusable React component with the following features:

#### Props
- `variant`: `'default'` | `'mono'` | `'text-only'`
  - `default`: Uses colorful logo
  - `mono`: Uses monochrome logo (perfect for footer)
  - `text-only`: Shows only text without image
- `size`: `'sm'` | `'md'` | `'lg'` | `'xl'`
  - Controls both image and text size
- `showText`: `boolean` (default: `true`)
  - Whether to show the "W3nity" text alongside the logo
- `responsive`: `boolean` (default: `false`)
  - Enables responsive sizing for mobile devices
- `className`: Custom CSS classes
- `href`: Custom link destination (default: `/`)
- `onClick`: Custom click handler (overrides link behavior)

#### Features
- **Accessibility**: Proper alt text and focus states
- **Performance**: Eager loading for above-the-fold content
- **Responsive**: Mobile-friendly sizing when enabled
- **Hover Effects**: Smooth scale transition on hover
- **Brand Consistency**: Uses primary-to-secondary gradient for text

### 3. Implementation Locations

#### Navbar (`/src/components/Navbar.tsx`)
```tsx
<Logo 
  size="lg" 
  responsive
  onClick={() => navigate('/')}
  className="p-2 hover:bg-primary/10 rounded-md transition-colors duration-200"
/>
```

#### Footer (`/src/components/Footer.tsx`)
```tsx
<Logo 
  variant="mono" 
  size="lg"
  className="mb-4"
/>
```

## Design Considerations

### Logo Design
- **Lightning Bolt**: Represents energy, speed, and innovation
- **Connected Nodes**: Symbolizes Web3 connectivity and unity
- **Gradient Colors**: Matches the existing brand color scheme (#6366f1 to #8b5cf6)
- **Scalable SVG**: Ensures crisp rendering at all sizes

### Responsive Behavior
- Mobile-first approach with progressive enhancement
- Responsive sizing available for better mobile experience
- Maintains aspect ratio across all screen sizes

### Performance Optimizations
- SVG format for smallest file size and crisp rendering
- Eager loading for above-the-fold content
- Optimized gradients and minimal DOM elements

### Accessibility
- Descriptive alt text: "W3nity Logo"
- Keyboard navigation support with focus indicators
- ARIA labels for better screen reader support
- High contrast ratios in both color and monochrome versions

## Usage Examples

### Basic Logo
```tsx
<Logo />
```

### Footer Logo
```tsx
<Logo variant="mono" size="lg" />
```

### Responsive Navbar Logo
```tsx
<Logo 
  size="lg" 
  responsive 
  onClick={() => navigate('/')}
/>
```

### Text-Only Logo
```tsx
<Logo variant="text-only" size="xl" />
```

### Logo Without Text
```tsx
<Logo showText={false} size="md" />
```

## Brand Guidelines

1. **Minimum Size**: Never scale below 24px width
2. **Clear Space**: Maintain at least 8px clear space around the logo
3. **Color Usage**: Use mono variant on dark backgrounds or when color isn't suitable
4. **Consistency**: Always use the same logo across the platform
5. **Quality**: Only use the provided SVG files to ensure quality

## Future Enhancements

1. **Dark Mode Support**: Automatic variant switching based on theme
2. **Animated Logo**: Loading states and micro-interactions
3. **Additional Formats**: PNG versions for different use cases
4. **Brand Mark**: Simplified icon-only version for favicons and small spaces