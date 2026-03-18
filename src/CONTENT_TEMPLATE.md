# Case Study Content Template

Use this template to populate your case study pages with actual content from your Figma file.

---

## General Structure for Each Case Study

### 1. Hero Section
- **Title:** Project name
- **Subtitle:** Your role
- **Tags:** 3-4 relevant skill tags
- **Hero Image:** Main project screenshot or mockup

### 2. Overview Section
- Brief 2-3 sentence description of the project
- What it does, who it's for, main value proposition
- Your role and timeframe

### 3. The Challenge
- What problem were you solving?
- Who was affected?
- Why was this important?
- List 3-4 key challenges

### 4. Your Role & Process
- What were your specific responsibilities?
- What methods/tools did you use?
- Who did you work with?

### 5. Research/Discovery (if applicable)
- Research methods used
- Key insights found
- User needs identified
- Supporting images (personas, journey maps, etc.)

### 6. Design Process/Solutions
- How did you approach solving the problem?
- Design decisions and rationale
- Iterations and evolution
- Supporting images (wireframes, mockups, prototypes)

### 7. Key Features/Deliverables
- Highlight 2-4 main features or deliverables
- Include description and visuals for each
- Explain the impact of each feature

### 8. Impact & Results
- Quantitative metrics (if available)
  - User engagement improvements
  - Task completion rates
  - User satisfaction scores
  - Business metrics
- Qualitative outcomes
  - User feedback
  - Team testimonials
  - Awards/recognition

### 9. Reflections & Learnings
- What did you learn?
- What would you do differently?
- How did this project help you grow?
- Future improvements or next steps

### 10. Next Project Link
- Links to the next case study in sequence

---

## Content Checklist for Each Project

### Blyss Social
- [ ] Update hero image with actual Blyss screenshot
- [ ] Write overview (what is Blyss, your role)
- [ ] Define the challenge Blyss solves
- [ ] List your design & development responsibilities
- [ ] Add research insights
- [ ] Show design process with actual screenshots
- [ ] Highlight 2-3 key features with visuals
- [ ] Add metrics/results
- [ ] Write reflections

### Noted by Nani
- [ ] Update hero image
- [ ] Write overview (digital product, data viz focus)
- [ ] Define the challenge
- [ ] Detail instructional design approach
- [ ] Show data visualization examples
- [ ] Add impact metrics
- [ ] Write learnings

### Sereniti
- [ ] Update hero image
- [ ] Write overview (wellness/mental health focus?)
- [ ] Show brand development process
- [ ] Include brand elements (logo, colors, typography)
- [ ] Detail user research findings
- [ ] Show product design mockups
- [ ] Add impact/results
- [ ] Write reflections

### Clarity Assist
- [ ] Update hero image (AI interface)
- [ ] Write overview (generative AI product)
- [ ] Define AI/conversation design challenges
- [ ] Show conversation flow examples
- [ ] Demonstrate interaction patterns
- [ ] List design principles for AI
- [ ] Add impact on users
- [ ] Write learnings about AI design

### Amazon Learn
- [ ] Update hero image (LMS interface)
- [ ] Write overview (edtech/LMS project)
- [ ] Define project goals
- [ ] Detail usability testing methodology
- [ ] Show research insights
- [ ] Present design solutions (navigation, progress tracking)
- [ ] Share usability testing results with metrics
- [ ] Write reflections on LMS design

### Mentor Me Collective
- [ ] Update hero image (branding/mentorship)
- [ ] Write overview (mentorship platform)
- [ ] Show brand identity development
- [ ] Detail content strategy
- [ ] Explain instructional design approach
- [ ] Show visual design system
- [ ] Add impact metrics (mentors, resources)
- [ ] Write learnings

---

## Image Guidelines

### Types of Images to Include:
1. **Hero images** - Full product screenshots or hero mockups
2. **Process images** - Wireframes, sketches, iterations
3. **Final designs** - High-fidelity mockups, prototypes
4. **Research artifacts** - Personas, journey maps, user flows
5. **Results/metrics** - Charts, graphs, before/after comparisons
6. **Brand elements** - Logos, color palettes, typography samples

### Current Placeholder Images:
All pages currently use Unsplash placeholders. To replace:

1. Go to the specific case study file (e.g., `/pages/case-studies/Blyss.tsx`)
2. Find `ImageWithFallback` components
3. Replace the Unsplash URL with your actual image URL or path
4. Update the `alt` text to describe your actual image

Example:
```jsx
// Current placeholder
<ImageWithFallback
  src="https://images.unsplash.com/photo-..."
  alt="Generic placeholder"
/>

// Replace with your image
<ImageWithFallback
  src="/images/blyss-dashboard.png"
  alt="Blyss Social dashboard showing user analytics"
/>
```

---

## Writing Tips

### For Overview Sections:
- Start with "X is a [type of product] that helps [target users] to [main benefit]"
- Keep it concise - 2-3 sentences max
- Focus on impact, not just features

### For Challenge Sections:
- Use specific examples and pain points
- Quantify when possible ("users spent 5 minutes searching for...")
- Make it relatable and human-centered

### For Process Sections:
- Use active voice ("I conducted," "I designed," "I tested")
- Show progression and iteration
- Explain your reasoning and decisions

### For Impact Sections:
- Lead with numbers when available
- Use percentages for improvements
- Include user quotes or feedback if you have them
- Be honest about limitations or ongoing work

### For Reflections:
- Be authentic and personal
- Share actual learnings, not generic statements
- Mention specific skills you developed
- Discuss what you'd do differently

---

## Metrics to Include (if available)

- **Engagement:** Daily/monthly active users, session duration, return rate
- **Usability:** Task completion rate, time on task, error rate
- **Satisfaction:** NPS score, satisfaction rating, user quotes
- **Business:** Conversion rate, revenue impact, cost savings
- **Design:** A/B test results, heatmap insights, click-through rates

---

## Content Length Guidelines

- **Overview:** 50-100 words
- **Challenge:** 100-150 words
- **Process:** 150-300 words
- **Features:** 50-100 words per feature
- **Impact:** 100-200 words
- **Reflections:** 100-150 words

**Total per case study:** ~800-1500 words

---

## Next Steps

1. **Export images from Figma** - Save all screenshots, mockups, and visuals
2. **Draft content** - Use this template to write content for each section
3. **Replace placeholders** - Update each `.tsx` file with your actual content
4. **Replace images** - Swap Unsplash URLs with your actual image URLs
5. **Review & polish** - Check for typos, consistency, and flow
6. **Test navigation** - Make sure all links between pages work

---

## Quick Content Replacement Guide

To update a case study:

1. Open the file: `/pages/case-studies/[ProjectName].tsx`
2. Find text in square brackets: `[Description of the feature]`
3. Replace with your actual content
4. Find `ImageWithFallback` components
5. Replace `src` URLs with your images
6. Update `alt` text to describe your images
7. Save and preview

---

## Questions to Answer for Each Project

1. What problem does this solve?
2. Who is it for?
3. What was your specific role?
4. What made this challenging?
5. How did you approach solving it?
6. What did you create/deliver?
7. What was the impact?
8. What did you learn?

Answer these 8 questions and you'll have content for all your sections!
