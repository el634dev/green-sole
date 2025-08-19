# Green Sole Co.
A sustainability-focused e-commerce storefront selling shoes crafted from eco-friendly materials and uses fair-trade practices. The site is built with vanilla HTML, CSS, and JavaScript, featuring a product gallery, testmoninals and client showcase. It’s a lightweight, accessible, responsive frontend suitable for demonstrations, guide, or as a starting point for a backend using Node.js.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Development & Build](#development-build)
- [Deployment](#deployment)
- [Accessibility & Performance](#accessibility-performance)
<!-- - [Contributing](#contributing) -->
- [License & Credits](#license-credits)

## Features
- Browse a catalog of sustainable shoes
- Client showcase
- Product Gallery
- Client Testmoninals
- Newsletter Form
- Lightweight, accessible UI 
<!-- - Client-side cart with add/remove/update, stored in localStorage -->

## Tech Stack
- HTML
- CSS (no framework)
- JavaScript (vanilla)

Note: This is a static frontend example. For a production store, you would connect to a backend for real checkout, inventory, and payments. You can also use vanilla JavaScript to create a shopping cart and for inventory but it would not work with payments

## Live Demo
Coming Soon
- Example URL: https://your-domain.com/ecostride

## Getting Started
1. Clone the repository
   - git clone https://github.com/el634dev/green-sole-co.git
2. Open the site
   - Open index.html in your browser
   - Or start a local server for a more realistic environment (see Development & Build)
3. (Optional) Replace the any data
   - Product data is customizable or replace this with your own data.

If you want to serve it locally with a simple server (avoid CORS issues when fetching local files), run one of:
- Node (http-server): npx http-server -c-1

## File Structure
- index.html                      - Main landing page
- styles.css                      - Core styles for layout and components
- index.js                        - Main JavaScript file holding the logic
- readme.md

<!-- 
## Data Model
- Cart
  - items: array of { productId, quantity }
  - totals calculated on the client side
  - persisted to localStorage -->

## Development & Build

- No build tools required. This is a plain HTML/CSS/JS project.
- To customize:
  - Edit index.html to add or modify anything
  - Add /assets/images for product visuals (Optional)
  - Tweak styling in styles.css
  - Extend or modify behavior in index.js

Tips:
- Consider adding a lightweight bundler or module system if you expand the project such as ESLint.
- If you plan to add a real backend, you can replace the local storage cart with API calls and implement real checkout.

## Testing -- Optional
- Manual testing recommended:
  - Add items to cart, update quantities, and remove items
  - Test search results and filter combinations
  - Verify responsive layout on mobile, tablet, and desktop
  - Ensure accessibility: keyboard nav, ARIA labels on controls
- No automated tests in this minimal setup. You can add Jest or Playwright tests if you extend the project.

## Deployment
- GitHub Pages, Netlify, Vercel, or any static hosting that serves HTML/CSS/JS will work.
- Ensure your hosting serves /data and /assets correctly if you modify the file structure.

## Accessibility & Performance
- Keyboard accessible controls and semantic HTML
- Minimal JS to improve performance
- Consider implementing lazy loading for images and using modern image formats (webp) to reduce bandwidth

<!-- ## Contributing
Contributions are welcome. Please open an issue or submit a pull request with:
- a brief description of changes
- any breaking changes documented
- updated screenshots or examples if applicable -->

## License & Credits
- License: MIT
- This project is a demonstration of a static frontend e-commerce store. The sustainability focus is reflected in the product data and branding.
- Images and assets should be replaced with your own licensed materials if you choose when deploying publicly.

## Additional Notes (Sustainability Focus)
- The data model is designed to reflect materials and categories that align with eco-friendly products (e.g., recycled materials, plant-based foams, low-impact production).
- When expanding, consider adding performance analytics to track sustainability metrics (e.g., material usage, end-of-life recycling programs) and linking to a sustainability policy or supplier information.