# Salman Portfolio 2026

A modern, space-themed portfolio website built with Next.js 16, React 19, and Tailwind CSS.

## ✅ Completed Features

### Core Sections
- [x] **Hero Section** - Gradient text, terminal card, social links
- [x] **Experience Timeline** - Vertical track, company logos, impact-focused bullets
- [x] **Skills Section** - Four categories with tag-based display
- [x] **Projects Showcase** - 2-column grid, hover effects, metrics
- [x] **Contact Form** - Validation, accessibility, error handling

### Design System
- [x] **Deep Navy/Teal Theme** - Custom color palette with CSS variables
- [x] **Starry Background** - Animated stars, shooting stars, nebula glow
- [x] **BEM Styling** - Modular CSS for all components
- [x] **Theme Toggle** - Dark/Light mode with teal icons

### Senior Engineering Standards
- [x] **Semantic HTML** - Proper section, nav, article, ul/ol usage
- [x] **Accessibility** - ARIA labels, focus states, keyboard nav
- [x] **Error Boundary** - Site-wide error protection with logging
- [x] **Form Validation** - Required fields, email format, error messages
- [x] **Security Audit** - XSS prevention, no hardcoded secrets

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 + CSS Modules |
| Components | ShadCN UI |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter, JetBrains Mono |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run security audit
npm audit
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Hero, Experience, Projects, Skills, Contact
│   ├── providers/       # ThemeProvider, ErrorBoundary
│   └── ui/              # SocialLinks, ThemeToggle, StarryBackground
├── data/                # Portfolio data (experiences, projects, skills)
└── lib/                 # Utilities
```

## 🚧 Next: Blog Section

See [PRD.md](./PRD.md) for planned features.

## 📋 Deployment

- **GitHub Pages**: [Salvero.github.io](https://salvero.github.io)
- **Vulnerabilities**: 0 (npm audit)

---

**Author**: Salman  
**Last Updated**: 2025-12-12
