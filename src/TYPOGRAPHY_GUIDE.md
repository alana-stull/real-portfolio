# Typography Customization Guide

This guide explains how to easily customize fonts, sizes, and weights in your portfolio website.

## Quick Reference

All typography settings are centralized in `/styles/globals.css` for easy editing.

---

## Font Sizes

Located in `/styles/globals.css` under the `:root` section:

```css
/* Font Sizes */
--font-size-display: 3.5rem;      /* 56px - Hero headings */
--font-size-h1: 2.5rem;           /* 40px - Main headings */
--font-size-h2: 2rem;             /* 32px - Section headings */
--font-size-h3: 1.5rem;           /* 24px - Subsection headings */
--font-size-h4: 1.25rem;          /* 20px - Small headings */
--font-size-body-large: 1.125rem; /* 18px - Large body text */
--font-size-body: 1rem;           /* 16px - Default body text */
--font-size-small: 0.875rem;      /* 14px - Small text, tags */
--font-size-tiny: 0.75rem;        /* 12px - Captions, labels */
```

**To change:** Simply update the rem values. For example, to make h1 larger:
```css
--font-size-h1: 3rem; /* Changes from 40px to 48px */
```

---

## Font Weights

Located in `/styles/globals.css` under the `:root` section:

```css
/* Font Weights */
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-black: 900;
```

**To change:** Update the numeric values. Figtree supports weights 300-900.

---

## Typography Classes

Use these classes in your components for consistent styling:

### Headings
- `.text-display` - Largest heading (hero sections)
- `.text-heading-1` - Main page headings
- `.text-heading-2` - Section headings
- `.text-heading-3` - Subsection headings
- `.text-heading-4` - Small headings

### Body Text
- `.text-body-large` - Large paragraphs (18px)
- `.text-body` - Regular paragraphs (16px)
- `.text-body-small` - Small paragraphs (14px)

### Specialty
- `.text-caption` - Uppercase labels with letter spacing
- `.text-label` - Tiny uppercase labels

### Example Usage
```jsx
<h1 className="text-display">Your Heading</h1>
<p className="text-body-large">Your paragraph text</p>
<span className="text-caption">Label Text</span>
```

---

## HTML Element Defaults

Basic HTML elements automatically use these styles:

- `<h1>` → font-size-h1, font-weight-bold
- `<h2>` → font-size-h2, font-weight-semibold
- `<h3>` → font-size-h3, font-weight-semibold
- `<h4>` → font-size-h4, font-weight-medium
- `<p>` → font-size-body, font-weight-regular
- `<button>` → font-size-body, font-weight-medium
- `<label>` → font-size-body, font-weight-medium

**Note:** These only apply when you DON'T use Tailwind text classes.

---

## Color Palette

Your brand colors in `/styles/globals.css`:

```css
/* Portfolio Color Palette */
--color-brown-primary: #6c382a;  /* Primary brown */
--color-tan-accent: #b88c6f;     /* Accent tan */
--color-gray-text: #5b5b5b;      /* Body text gray */
--color-white: #ffffff;
--color-black: #1a1a1a;
--color-light-bg: #f9f9f9;       /* Light backgrounds */
```

### Using Colors in Components
```jsx
{/* Using inline styles */}
<div style={{ color: 'var(--color-brown-primary)' }}>Text</div>
<div style={{ backgroundColor: 'var(--color-tan-accent)' }}>Box</div>

{/* Using Tailwind with custom values */}
<div className="bg-[var(--color-brown-primary)]">Text</div>
```

---

## Common Customizations

### Make all headings lighter weight:
```css
--font-weight-semibold: 500;  /* Change from 600 to 500 */
--font-weight-bold: 600;      /* Change from 700 to 600 */
```

### Increase body text size site-wide:
```css
--font-size-body: 1.125rem;   /* Change from 16px to 18px */
```

### Change the primary brand color:
```css
--color-brown-primary: #8b4513; /* New brown shade */
```

### Adjust line spacing:
```css
--line-height-normal: 1.6;    /* Change from 1.5 to 1.6 */
```

---

## File Structure

```
/pages/
  /case-studies/
    - Blyss.tsx
    - NotedByNani.tsx
    - Sereniti.tsx
    - ClarityAssist.tsx
    - AmazonLearn.tsx
    - MentorMeCollective.tsx
  - Home.tsx
  - About.tsx
  - Work.tsx

/components/
  - ProjectTag.tsx           (Reusable tag component)
  - CaseStudySection.tsx     (Reusable section components)
  - Navigation.tsx
  - Layout.tsx

/styles/
  - globals.css              (ALL TYPOGRAPHY & COLORS HERE)
```

---

## Tips

1. **Always edit globals.css** - Don't hardcode font sizes in components
2. **Use CSS variables** - They make global changes instant
3. **Use the typography classes** - More consistent than inline styles
4. **Test responsively** - Some sizes may need mobile adjustments
5. **Keep it simple** - Fewer font sizes = more cohesive design

---

## Need Help?

- All case study pages follow the same structure
- Each uses `CaseStudySection` and `CaseStudyTextBlock` components
- To edit content, just find the relevant `.tsx` file and update the text
- Images use `ImageWithFallback` component from Unsplash
