# Project Brief

## 1. Website Concept
<!-- Fill in after Phase 2 — Defining the Project Brief -->

**Website Topic:** A single-page travel guide to trekking in Nepal.

**Why:** Trekking in Nepal has many routes, permits, seasons, and costs spread across different sources. I want to collect the practical details in one clear, well-organized place.

**Target Audience:** People who enjoy traveling and want to trek in Nepal, especially first-time trekkers who want complete, practical instructions.

**Visitor Outcome:** After visiting, a visitor should understand how to choose a trek, which permits and guides they need, when to go, how to stay safe at altitude, what to pack, and what the trip will cost, so they feel ready to plan their own trek.

**Three Main Sections:**
1. **Plan Your Trek:** Choosing a Trek, Permits and TIMS Card, Best Seasons
2. **On the Trail:** Guides and Porters, Teahouse Lodges, Altitude Sickness Safety
3. **Get Ready:** Packing List, Budget Planning

All eight topics appear as cards in a grid that expands on click.

**Key Highlight:** The interactive grid of eight trekking topic cards. Each card expands to show its full instructions, making the page easy to scan and explore.

---

## 2. Visual Plan
<!-- Fill in after Phase 3 — Visual Planning Prompt -->

**Mood and Tone:** Bold, energetic, and trustworthy, like a trail map at sunrise. Adventurous but organized, so visitors trust the practical details.

**Color Palette:**
- Background: `#0B1E2D` (deep night-sky blue)
- Primary Text: `#F2F5F7` (snow white)
- Brand Color: `#1F4E3D` (forest green, used for headers and card titles)
- Accent: `#F2A541` (sunrise amber, used for buttons and highlights)

**Typography:**
- Heading Font: Montserrat (bold weights)
- Body Font: Open Sans

**Layout Approach:** Full-width hero banner with a mountain photo and dark overlay, a short intro, then a responsive grid of eight trekking cards (1 column on phones, 2 on tablets, 4 on laptops), and a footer with a "before you go" reminder and photo credits.

**Images & Graphics Style:** Wide, high-contrast mountain photos from royalty-free Unsplash sources, loaded by URL (no files uploaded). The logo is an inline SVG mountain mark. Hero uses a 16:9 crop and cards use 4:3, with a dark gradient over photos for readable white text.

**Button & UI Style:** Solid amber, rounded corners, dark text, darkens slightly on hover. Card buttons read "Read more" and change to "Close" when expanded. Cards have a dark green background, a thin light border, and a gentle lift on hover.

---

## 3. Interaction Specifications
<!-- Fill in after Phase 4 — Interaction Planning & Specification -->

### Interaction 1
- **Interaction Name:** Card Hover Lift
- **Visitor Action:** Moves the pointer over a trek card or button
- **Page Response:** The card lifts about 3px with a soft shadow, and amber buttons darken slightly
- **HTML Elements:** `.trek-card`, `.card-btn`, and `.back-to-top` elements
- **JS Event:** None (CSS only)
- **Function Name:** None (CSS only)
- **CSS Class Toggled:** `:hover` pseudo-class (no class toggled)

### Interaction 2
- **Interaction Name:** Card Expand and Collapse
- **Visitor Action:** Clicks a trek card's "Read more" button
- **Page Response:** The card's full instructions appear, and the button text changes to "Close." Clicking "Close" hides the instructions again.
- **HTML Elements:** `.trek-card` container, `.card-details` panel, and `.card-btn` button
- **JS Event:** `click`
- **Function Name:** `toggleCard()`
- **CSS Class Toggled:** `.open` on the `.trek-card` element

### Interaction 3
- **Interaction Name:** Season Picker
- **Visitor Action:** Selects a month or season from a dropdown
- **Page Response:** Trek routes that suit that season stay bright, and the others fade back
- **HTML Elements:** `<select class="season-picker">` and each `.route-item` in the route list, with a `data-seasons` attribute
- **JS Event:** `change`
- **Function Name:** `filterBySeason()`
- **CSS Class Toggled:** `.faded` on routes that don't match the selected season

### Interaction 4
- **Interaction Name:** Packing Checklist
- **Visitor Action:** Ticks items on the packing list
- **Page Response:** Ticked items are crossed out, and a counter shows the number packed (for example, "12 of 30 packed")
- **HTML Elements:** `<input type="checkbox">` for each item, `<li>` items, and a `.pack-count` element
- **JS Event:** `change`
- **Function Name:** `updatePackCount()`
- **CSS Class Toggled:** `.packed` on each checked `<li>`

### Interaction 5
- **Interaction Name:** Trip Budget Estimator
- **Visitor Action:** Enters the number of trekking days and chooses a comfort level (budget, mid-range, or comfortable)
- **Page Response:** An estimated total updates for food, lodging, permits, and transport
- **HTML Elements:** `<input type="number" class="trek-days">`, `<select class="comfort-level">`, and a `.budget-total` element
- **JS Event:** `input` and `change`
- **Function Name:** `calculateBudget()`
- **CSS Class Toggled:** None (updates text content only)

### Interaction 6
- **Interaction Name:** Back-to-Top Button
- **Visitor Action:** Scrolls down past the hero banner
- **Page Response:** An amber "Back to top" button appears in the corner. Clicking it smoothly scrolls the visitor back to the top.
- **HTML Elements:** `<button class="back-to-top">` and the `.hero` section
- **JS Event:** `scroll` (to show the button) and `click` (to scroll to the top)
- **Function Name:** `toggleBackToTop()` and `scrollToTop()`
- **CSS Class Toggled:** `.visible` on `.back-to-top`

---

## 4. Architecture Plan
<!-- Fill in after Phase 5 — Required Files and Architecture Prompt -->

**HTML Structure Plan:**
- `index.html` (single page)
- `<header class="hero">`: page title, intro line, and background photo
- `<main>` containing:
  - `<section class="intro">`: two or three sentences about the guide
  - `<section class="trek-grid">`: eight `<article class="trek-card">` elements, each with an `<h3>` title, a short summary, a `.card-details` panel with full instructions, and a `<button class="card-btn">Read more</button>`
  - `<section class="planning-tools">`: contains the season picker (`<select class="season-picker">`), a route list (`<ul class="route-list">` with `<li class="route-item" data-seasons="...">` items), the packing checklist (`<ul class="pack-list">` with checkbox items and a `.pack-count` element), and the budget estimator (`<input class="trek-days">`, `<select class="comfort-level">`, and a `.budget-total` element)
- `<footer>`: "before you go" reminder and photo credits
- `<button class="back-to-top">` fixed in the bottom corner, hidden until the visitor scrolls past the hero
- `images/` folder for downloaded photos
- `README.md`: project goals, setup instructions, and a list of files
- `<link>` to `styles.css` and `<script>` for `script.js` (placed before `</body>`)

**CSS Architecture Plan:**
- `styles.css` with sections in this order: reset and base styles, CSS variables for the colors and fonts from Section 2, layout (hero, intro, grid), card styles, `.open` state, buttons, hover effects, footer, and responsive breakpoints (phone, tablet, laptop)
- CSS variables: `--color-background`, `--color-text`, `--color-brand`, `--color-accent`
- Hover styles use `:hover` only, with no JavaScript involved
- State classes added by JavaScript: `.open` (card expanded), `.faded` (route doesn't match season), `.packed` (checklist item ticked), `.visible` (back-to-top button shown)
- Planning tools section styled as three stacked cards (route list, packing checklist, budget estimator) using the same colors and fonts

**JavaScript Function Map:**
- `script.js`
- `toggleCard(card)`: adds or removes the `.open` class on a card and updates its button text between "Read more" and "Close"
- Event listener: each `.card-btn` gets a `click` listener that calls `toggleCard()` with its parent card
- `filterBySeason()`: on `change` of `.season-picker`, adds or removes `.faded` on each `.route-item` based on its `data-seasons`
- `updatePackCount()`: on `change` of each checklist checkbox, toggles `.packed` on its `<li>` and updates the `.pack-count` text
- `calculateBudget()`: on `input` or `change` of the budget fields, multiplies the days by the daily rate for the chosen comfort level and updates `.budget-total`
- `toggleBackToTop()`: on `scroll`, adds or removes `.visible` on `.back-to-top` based on how far the visitor has scrolled past the hero
- `scrollToTop()`: on `click` of `.back-to-top`, smoothly scrolls the window to the top

**Implementation Steps:**
1. Create `index.html` with the hero, intro, eight trek cards, and footer
2. Download royalty-free mountain photos into `images/` and add them to the hero and cards
3. Create `styles.css` with the color variables, fonts, and grid layout
4. Add the card styles, amber buttons, and `:hover` effects
5. Add responsive breakpoints for phone, tablet, and laptop
6. Create `script.js` with `toggleCard()` and the click listeners
7. Add the planning tools (season picker, packing checklist, budget estimator) and the back-to-top button with their functions
8. Test on desktop and mobile, checking that every card opens and closes and every tool works
9. Write `README.md` with the project goals, setup steps, and file list
10. Commit the files and push to GitHub (`origin`, branch `main`)
