# Bike Shack - Shopify Theme

A modern, feature-rich Shopify theme built on the Shopify Dawn framework with custom enhancements for e-commerce excellence. This theme is tailored for bike retailers and includes advanced functionality like product comparison, testimonials, product quizzes, and more.

**Theme Version:** 1.2.0  
**Based on:** JS Mastery x Coding with Jan  
**Framework:** Shopify Dawn

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Customization](#customization)
- [Key Components](#key-components)
- [JavaScript Modules](#javascript-modules)
- [Styling](#styling)
- [Development](#development)

---

## Features

### Core E-Commerce Functionality
- **Product Management** - Full product pages with variants, pricing, and availability
- **Shopping Cart** - Cart drawer with live updates and notifications
- **Checkout Integration** - Seamless Shopify checkout experience
- **Search & Discovery** - Predictive search with autocomplete
- **Collection Management** - Product filtering and browsing

### Advanced Features
- **Product Comparison Tool** - Compare multiple products side-by-side
- **Product Quiz** - Interactive quiz to help customers find products
- **Testimonials Slider** - Custom testimonials section with carousel
- **Countdown Timer** - Limited-time offer countdown elements
- **Newsletter Signup** - Email capture with customizable forms
- **Pickup Availability** - Show local store pickup options
- **Volume Pricing** - Tiered pricing for bulk purchases

### Design & UX
- **Responsive Design** - Mobile-first approach with full responsive support
- **Accessibility Features** - WCAG compliant with proper semantic HTML
- **Customizable Color Schemes** - Multiple color palettes for different themes
- **Typography Control** - Configurable fonts for headers and body text
- **Animation Effects** - Smooth reveal animations on scroll
- **Mega Menu** - Advanced navigation with dropdown menus

### Customer Features
- **Customer Accounts** - Login, registration, and account management
- **Order Tracking** - View order history and details
- **Address Management** - Multiple saved addresses
- **Quick Add to Cart** - Fast product purchasing
- **Wishlist/Favorites** - Save favorite products (ready for implementation)
- **Blog Integration** - Featured blog posts and articles

---

## Project Structure

```
bike-shack/
├── assets/                    # CSS, JavaScript, and media files
│   ├── *.js                  # JavaScript modules for interactive features
│   ├── *.css                 # Stylesheets for components and layouts
│   └── animations.js         # Scroll animation utilities
├── config/
│   ├── settings_schema.json  # Theme customization options
│   └── settings_data.json    # Current theme settings
├── layout/
│   ├── theme.liquid          # Main theme layout template
│   └── password.liquid       # Password-protected store layout
├── locales/                  # i18n translation files
├── sections/                 # Modular section components
│   ├── header.liquid         # Header section with navigation
│   ├── footer.liquid         # Footer section
│   ├── featured-*.liquid     # Featured products/collections/blogs
│   ├── announcement-bar.liquid
│   ├── newsletter.liquid
│   ├── custom-*.liquid       # Custom sections (testimonials, tracking)
│   └── [50+ more sections]
├── snippets/                 # Reusable template fragments
├── templates/                # Page templates
│   ├── index.json            # Homepage
│   ├── product.json          # Product pages
│   ├── collection.json       # Collection pages
│   ├── blog.json             # Blog listing
│   ├── article.json          # Individual article pages
│   ├── cart.json             # Shopping cart
│   ├── page.*.json           # Custom pages (contact, quiz, comparison)
│   └── [customer pages]
└── README.md                 # This file
```

---

## Installation

### Prerequisites
- Shopify store access
- Shopify CLI (optional, for local development)
- Basic knowledge of Shopify theme development

### Setup Steps

1. **Clone or Download the Theme**
   ```bash
   git clone <repository-url>
   cd bike-shack
   ```

2. **Upload to Shopify**
   - Via Shopify Admin: Online Store → Themes → Upload theme
   - Via Shopify CLI: `shopify theme push`

3. **Configure Theme Settings**
   - Go to Online Store → Themes → Customize
   - Upload your logo, favicon, and customize colors
   - Configure fonts and typography
   - Set up your navigation menus

4. **Customize Content**
   - Update homepage sections
   - Configure product collections
   - Add testimonials and promotions
   - Set up newsletter signup

---

## Customization

### Theme Settings (settings_schema.json)

The theme offers extensive customization through the Shopify admin:

- **Logo & Favicon** - Upload brand assets
- **Color Schemes** - Multiple color palettes with background gradients
- **Typography** - Header and body font selection
- **Product Settings** - Variant displays, pricing options
- **Navigation** - Menu configuration and layout
- **Social Media** - Links and social integration

### Custom JavaScript

Key JavaScript modules for customization:

| File | Purpose |
|------|---------|
| `global.js` | Global utilities and initialization |
| `constants.js` | App-wide constants and enums |
| `pubsub.js` | Publish-subscribe event system |
| `product-compare-view.js` | Product comparison functionality |
| `custom-testimonials-slider.js` | Testimonial carousel |
| `countdown.js` | Countdown timer logic |
| `cart-drawer.js` | Shopping cart drawer |

---

## Key Components

### Sections (Reusable Page Sections)
- **Announcement Bar** - Top banner for promotions
- **Header Group** - Navigation and logo (header-group.json)
- **Footer Group** - Footer links and info (footer-group.json)
- **Featured Products** - Showcase specific products
- **Featured Collections** - Display product categories
- **Collage** - Image grid layouts
- **Newsletter** - Email signup form
- **Image with Text** - Content + imagery sections
- **Testimonials Slider** - Customer reviews carousel
- **Countdown** - Limited-time offer timer

### Templates (Page Templates)
- **Home** - Homepage (index.json)
- **Product** - Product detail page with variants
- **Collection** - Category/collection browsing
- **Blog/Article** - Blog post display
- **Cart** - Shopping cart summary
- **Customer** - Login, registration, account pages
- **Search** - Product search results

### Custom Pages
- **Product Comparison** - Compare multiple products (page.product-comparison.json)
- **Product Quiz** - Interactive product finder (page.product-quiz.json)
- **Contact Custom** - Custom contact form (page.contact-custom.json)

---

## JavaScript Modules

### Core Modules

**pubsub.js** - Event system for component communication
```javascript
// Publish an event
PubSub.publish('event-name', data);

// Subscribe to an event
PubSub.subscribe('event-name', callback);
```

**constants.js** - Application constants and configuration

**animations.js** - Scroll-based animation triggers

### Component Classes

**ProductCompareView** - Manages product comparison functionality
- Add/remove products from comparison
- Dynamic comparison table display
- Product selection dropdown

**CustomTestimonialsSlider** - Testimonial carousel with Flickity
- Auto-play and pause on hover options
- Left-aligned slide initialization
- Navigation controls

---

## Styling

### CSS Architecture

- **Base Styles** - [base.css](assets/base.css) - Foundation styles
- **Component Styles** - [component-*.css](assets) - Individual component styling
- **Layout Styles** - Responsive grid and flexbox layouts
- **Theme-specific** - [custom-*.css](assets) - Custom feature styling

### CSS Variables

The theme uses CSS custom properties for theming:

```css
--color-background
--color-text
--color-button
--color-button-label
--color-shadow
```

### Responsive Design

- Mobile-first approach
- Breakpoints: 640px, 750px, 990px, 1200px, 1440px
- Flexbox and Grid layouts
- Touch-friendly interactive elements

---

## Development

### Folder Conventions

- **assets/** - External files (CSS, JS, images) referenced via `{{ 'file' | asset_url }}`
- **sections/** - Modular page sections with JSON schema
- **snippets/** - Reusable Liquid template fragments
- **templates/** - Full page templates
- **locales/** - Translatable strings for i18n

### Liquid Templating

The theme uses Shopify Liquid templating language. Key files:

- [layout/theme.liquid](layout/theme.liquid) - Main HTML structure
- [layout/password.liquid](layout/password.liquid) - Password-protected store layout

### Common Tasks

**Adding a New Section:**
1. Create `sections/my-section.liquid`
2. Include JSON schema for customization options
3. Use in templates: `{% section 'my-section' %}`

**Creating a Reusable Component:**
1. Create `snippets/my-component.liquid`
2. Include in templates: `{% render 'my-component' %}`

**Adding Custom Styles:**
1. Create new CSS file in assets folder
2. Link in theme.liquid or relevant section
3. Follow BEM naming convention: `.component__element--modifier`

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance

- Lazy loading for images
- Deferred media loading
- Asset compression and minification
- CSS/JS bundling optimized for Shopify CDN
- Accessibility-first approach for faster perceived performance

---

## Resources

- [Shopify Theme Development](https://shopify.dev/themes)
- [Shopify Liquid Documentation](https://shopify.dev/api/liquid)
- [Dawn Theme Repository](https://github.com/shopify/dawn)
- [Shopify CLI Documentation](https://shopify.dev/themes/tools/cli)

---

## Support

For issues or questions:
- Check Shopify's [theme support documentation](https://support.shopify.com/)
- Review the [Shopify Help Center](https://help.shopify.com/)
- Visit [Shopify Community Forums](https://community.shopify.com/)

---

## License

This theme is based on Shopify's Dawn framework. Please review the license terms with your Shopify store.

---

**Last Updated:** January 2026
