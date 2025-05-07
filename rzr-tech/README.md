# RZR Technologies Landing Page

A modern, responsive landing page for RZR Technologies - a development company specializing in SaaS, websites, dashboards, landing pages, and applications.

## Features

- Modern, sleek design with purple color scheme
- Interactive animations with Framer Motion
- Fully responsive layout for all device sizes
- Dark mode support
- Component-based architecture using React
- Contact form with validation
- Smooth scrolling navigation

## Technologies Used

- React
- TypeScript
- Framer Motion (for animations)
- React Scroll (for smooth scrolling)
- React Icons
- CSS (custom styling with variables)

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx       # Navigation bar component
│   ├── Hero.tsx         # Hero section component
│   ├── Services.tsx     # Services section component
│   ├── Benefits.tsx     # Benefits/advantages section component
│   ├── Portfolio.tsx    # Portfolio/work showcase component
│   ├── Testimonials.tsx # Testimonials section component
│   ├── CallToAction.tsx # CTA section with contact form
│   └── Footer.tsx       # Footer component
├── assets/              # Static assets like images
├── App.tsx              # Main App component
├── App.css              # Main stylesheet
├── index.css            # CSS reset and variables
└── main.tsx             # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- pnpm (v6+)

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/rzr-tech.git
cd rzr-tech
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
pnpm run build
```

The build files will be located in the `dist` directory.

## Customization

- Color Scheme: Edit the CSS variables in `src/index.css`
- Content: Update the text and images in respective component files
- Animations: Modify the animation parameters in the Framer Motion components

## License

MIT

## Acknowledgments

- Design inspiration from modern SaaS websites
- Icons provided by React Icons
- Animation library: Framer Motion
