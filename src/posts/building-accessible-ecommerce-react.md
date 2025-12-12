---
title: "Building Accessible E-Commerce with React"
description: "How I achieved WCAG 2.1 AA compliance in Growhaus Plants while maintaining a beautiful, modern design."
tags: ["Accessibility", "React", "WCAG", "E-Commerce"]
slug: "building-accessible-ecommerce-react"
featured: false
---

# Building Accessible E-Commerce with React

When I built Growhaus Plants, accessibility wasn't an afterthought—it was a core requirement from day one. Here's how I achieved WCAG 2.1 AA compliance.

## Why Accessibility Matters

Beyond being the right thing to do:

- **15-20%** of users have some form of disability
- Better SEO (screen readers and search engines parse content similarly)
- Legal requirements in many jurisdictions

## Core Principles Applied

### 1. Semantic HTML First

```tsx
// ❌ Div soup
<div onClick={handleClick}>Add to Cart</div>

// ✅ Semantic and accessible
<button 
  onClick={handleClick}
  aria-label="Add Monstera Deliciosa to cart"
>
  Add to Cart
</button>
```

### 2. Keyboard Navigation

Every interactive element must be keyboard-accessible:

```tsx
function ProductCard({ product }) {
  return (
    <article 
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && openDetail(product)}
    >
      {/* content */}
    </article>
  );
}
```

### 3. Focus Management

When modals open, focus should move to them:

```tsx
function CartModal({ isOpen }) {
  const closeRef = useRef(null);
  
  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus();
    }
  }, [isOpen]);
  
  return (
    <dialog open={isOpen}>
      <button ref={closeRef}>Close</button>
      {/* content */}
    </dialog>
  );
}
```

### 4. Color Contrast

All text meets 4.5:1 contrast ratio:

```css
:root {
  --text-primary: #1a1a1a;    /* On white: 16:1 */
  --text-secondary: #4a4a4a;  /* On white: 7.5:1 */
  --accent: #0d7c66;          /* On white: 5.2:1 */
}
```

### 5. Screen Reader Announcements

Dynamic content changes need to be announced:

```tsx
<div aria-live="polite" aria-atomic="true">
  {cartItems.length} items in cart
</div>
```

## Testing Tools Used

- **axe DevTools** - Automated accessibility testing
- **NVDA** - Screen reader testing (Windows)
- **Keyboard-only navigation** - Manual testing

## Results

- **Lighthouse Accessibility**: 95/100
- **WCAG 2.1 AA**: Full compliance
- **Zero critical issues** in axe audits

## Key Takeaways

1. Start with semantic HTML
2. Test with keyboard and screen readers
3. Use `aria-*` attributes sparingly and correctly
4. Accessibility improves UX for everyone

Check out the live demo at [growhaus-plants.netlify.app](https://growhaus-plants.netlify.app).
