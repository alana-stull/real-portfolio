# Alana Stull Portfolio Website

A clean, professional portfolio website built with React, featuring modular case study pages with easily customizable styling.

## 🎨 Design System

### Color Palette
- **Primary Brown:** `#6c382a`
- **Accent Tan:** `#b88c6f`
- **Gray Text:** `#5b5b5b`
- **Light Background:** `#f9f9f9`

### Typography
- **Font:** Figtree (Google Fonts)
- **Easy customization** via CSS variables in `/styles/globals.css`
- All font sizes and weights labeled for quick editing

## 📁 Project Structure

```
/pages/
├── Home.tsx              # Landing page with featured work
├── About.tsx             # About page
├── Work.tsx              # All projects overview
└── /case-studies/        # Individual case study pages
    ├── Blyss.tsx
    ├── NotedByNani.tsx
    ├── Sereniti.tsx
    ├── ClarityAssist.tsx
    ├── AmazonLearn.tsx
    └── MentorMeCollective.tsx

/components/
├── Navigation.tsx        # Header navigation
├── Layout.tsx           # Page wrapper
├── ProjectTag.tsx       # Reusable tag component
└── CaseStudySection.tsx # Reusable section components

/styles/
└── globals.css          # All typography and colors
```

## 🔗 Routes

- `/` - Home page
- `/about` - About page
- `/work` - All work overview
- `/case-studies/blyss` - Blyss Social case study
- `/case-studies/noted-by-nani` - Noted by Nani case study
- `/case-studies/sereniti` - Sereniti case study
- `/case-studies/clarity-assist` - Clarity Assist case study
- `/case-studies/amazon-learn` - Amazon Learn case study
- `/case-studies/mentor-me-collective` - Mentor Me Collective case study

## ✏️ How to Customize

### 1. Update Typography
Edit `/styles/globals.css`:

```css
/* Change font sizes */
--font-size-h1: 2.5rem;  /* Make larger/smaller */

/* Change font weights */
--font-weight-bold: 700; /* Make lighter/heavier */

/* Change colors */
--color-brown-primary: #6c382a; /* Update brand color */
```

See `TYPOGRAPHY_GUIDE.md` for complete details.

### 2. Add Content to Case Studies
Each case study file (e.g., `/pages/case-studies/Blyss.tsx`) has placeholder text in brackets like `[Description]`.

Replace these with your actual content:
- Project descriptions
- Challenge statements
- Research insights
- Design process details
- Impact metrics
- Reflections

See `CONTENT_TEMPLATE.md` for a complete guide.

### 3. Replace Images
Current images are Unsplash placeholders. To update:

```jsx
// Find ImageWithFallback components
<ImageWithFallback
  src="https://images.unsplash.com/..."  // Replace this
  alt="Your image description"           // Update this
/>

// Replace with your image
<ImageWithFallback
  src="/images/your-project-screenshot.png"
  alt="Blyss Social dashboard interface"
/>
```

### 4. Update Personal Information
- **Name:** Update in `/components/Navigation.tsx`
- **Hero text:** Update in `/pages/Home.tsx`
- **About page:** Update in `/pages/About.tsx`
- **Email:** Update contact links in pages

## 🎯 Case Study Structure

Each case study follows this consistent structure:

1. **Hero Section** - Title, role, tags, hero image
2. **Overview** - Brief project description
3. **Challenge** - Problem statement
4. **Role & Process** - Your responsibilities
5. **Research/Discovery** - Research methods and insights
6. **Design Process** - Solutions and iterations
7. **Key Features** - Main deliverables
8. **Impact & Results** - Metrics and outcomes
9. **Reflections** - Learnings and growth
10. **Next Project** - Link to next case study

## 🧩 Reusable Components

### ProjectTag
Use for skill tags:
```jsx
<ProjectTag variant="primary">Product Design</ProjectTag>
<ProjectTag variant="accent">Research</ProjectTag>
<ProjectTag>Default Style</ProjectTag>
```

### CaseStudySection
Use for content sections:
```jsx
<CaseStudySection title="Overview">
  <CaseStudyTextBlock>
    <p>Your content here...</p>
  </CaseStudyTextBlock>
</CaseStudySection>
```

## 📝 Typography Classes

Use these for consistent styling:

```jsx
<h1 className="text-display">Hero Heading</h1>
<h2 className="text-heading-1">Main Heading</h2>
<h3 className="text-heading-2">Section Heading</h3>
<p className="text-body-large">Large paragraph</p>
<p className="text-body">Regular paragraph</p>
<span className="text-caption">LABEL TEXT</span>
```

All classes are defined in `/styles/globals.css`.

## 🎨 Using Brand Colors

```jsx
{/* Inline styles */}
<div style={{ color: 'var(--color-brown-primary)' }}>Text</div>

{/* Tailwind with CSS variables */}
<div className="bg-[var(--color-brown-primary)]">Box</div>
```

## 📱 Responsive Design

The site is fully responsive:
- Mobile-first approach
- Breakpoints: `md:` (768px), `lg:` (1024px)
- Navigation adapts to mobile menu
- Grid layouts stack on mobile

## 🚀 Next Steps

1. **Replace placeholder content** in all case study pages
2. **Add your actual images** from Figma
3. **Update About page** with your bio
4. **Customize colors** if needed in globals.css
5. **Test all navigation** between pages
6. **Review on mobile** to ensure responsive behavior

## 📚 Reference Documents

- **TYPOGRAPHY_GUIDE.md** - Complete guide to customizing fonts and colors
- **CONTENT_TEMPLATE.md** - Template and checklist for populating case studies
- **guidelines/Guidelines.md** - Original project guidelines

## 🔧 Technical Details

- **Framework:** React with React Router
- **Styling:** Tailwind CSS v4.0 + CSS Variables
- **Icons:** Lucide React
- **Images:** ImageWithFallback component (supports Unsplash and local images)

## 💡 Tips

1. **Edit globals.css first** - Don't hardcode sizes in components
2. **Use CSS variables** - Makes global changes instant
3. **Keep it consistent** - Use the provided components
4. **One case study at a time** - Populate content gradually
5. **Test as you go** - Preview changes frequently

## 📧 Contact

Update your contact information in:
- Home page CTA section
- Navigation (if adding contact link)
- Footer (if you add one)

---

**Ready to customize?** Start with one case study, add your content and images, then move to the next!
