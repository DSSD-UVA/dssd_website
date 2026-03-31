# Project Detail Page — Design Spec

## Summary

A detail page shown when a user clicks on a project card. Route: `/projects/:id`. Follows the "Academic Brutalist" design system with an editorial sidebar layout.

## Data Model Changes

Extend the `Project` interface in `src/data/projects.ts` with optional fields:

```ts
export interface ProjectOutcome {
  value: string    // e.g. "12", "340+"
  label: string    // e.g. "Counties Mapped"
}

export interface ProjectMember {
  name: string
  role: string
}

export interface Project {
  // existing fields
  id: string
  title: string
  description: string
  category: 'Sustainability' | 'Social Equity' | 'Education' | 'Public Health'
  status: 'Active' | 'Completed'
  tags: string[]
  icon: string
  imageUrl?: string

  // new optional fields
  longDescription?: string
  methodology?: string[]        // array of paragraphs
  outcomes?: ProjectOutcome[]
  team?: ProjectMember[]
  partner?: string              // e.g. "VA Dept of Energy"
  timeline?: string             // e.g. "Aug 2023 – Present"
}
```

All new fields are optional. Sections are hidden when their data is undefined/empty.

## Page Layout

Light cream surface background. No dark hero section.

### Header (top of page, full-width)

1. **Back link** — "← Back to Projects" in primary blue, Space Grotesk, uppercase. Links to `/projects`.
2. **Chips row** — Category chip (secondary-container yellow bg, 2px border) + Status chip (surface-container-high bg, 2px border).
3. **Title** — Display-lg (3.5rem), Plus Jakarta Sans, font-weight 900, uppercase, tight tracking. Project icon displayed to the right as a Material Symbols icon (or emoji fallback).
4. **Tags** — Inverse-surface dark chips with Space Grotesk labels.

### Content Grid (8/4 two-column)

**Left Column (main content):**

1. **Hero image** (optional, shown if `imageUrl` exists) — 16:9 aspect ratio, 4px border, hard shadow. Blue gradient overlay. Small info card overlapping bottom-left corner with project caption.
2. **Overview** — Section title with 4px primary-blue underline. Uses `longDescription` if available, falls back to `description`.
3. **Methodology** (optional) — Rendered inside a `surface-container` card with 2px border. Blue analytics icon badge at top-right corner (-12px offset). Each paragraph rendered from the `methodology` array.
4. **Outcomes & Impact** (optional) — Section title with blue underline. Grid of outcome cards (2 columns). First card uses `secondary-container` yellow background; second uses `primary` blue. Large display values + Space Grotesk labels. 4px borders, hard shadow.

**Right Column (sidebar):**

1. **Team** (optional) — Card with dotted radial-gradient background (16px grid, outline color dots). Team members shown as rows with colored avatar placeholder, name (Plus Jakarta Sans bold), role (Space Grotesk uppercase). Each member in a surface bg sub-card with 2px border.
2. **Tech Stack** — Card with 2px border. Tags displayed as bullet-point list items (square dots) in Space Grotesk uppercase.
3. **Project Details** — Card with `surface-container-high` background. Key-value rows (Category, Status, Partner, Timeline) separated by 2px outline borders. Labels in tiny Space Grotesk uppercase, values in Plus Jakarta Sans bold.
4. **CTA Card** — `inverse-surface` dark background, hard shadow. Italic uppercase title ("Ready to contribute?"), body text, full-width primary blue button ("Apply to Team").

### Footer (below grid, centered)

**Back to All Projects** button — `secondary-container` yellow background, 4px border, hard shadow, Plus Jakarta Sans 900 uppercase with arrow_forward icon. Links to `/projects`.

## Routing

- Add route `/projects/:id` in `App.tsx` pointing to a new `ProjectDetail` page component.
- The `Card` component should wrap its content in a `<Link to={/projects/${id}}>` to make project cards clickable.

## Files to Create

- `src/pages/ProjectDetail.tsx` — Page component
- `src/pages/ProjectDetail.css` — Styles

## Files to Modify

- `src/data/projects.ts` — Extend `Project` interface, add detail data to at least 2-3 projects
- `src/components/Card.tsx` — Add `id` prop, wrap in Link
- `src/App.tsx` — Add route for `/projects/:id`

## Responsive Behavior

On mobile (< 768px), the two-column grid collapses to a single column with the sidebar stacking below the main content. The outcomes grid also collapses to single column.

## Animations

Use the existing `Reveal` component with the same animation patterns as other pages (slide-left, slide-right, fade-up, rise-blur, zoom-pop). Stagger delays on sidebar cards and outcome cards.
