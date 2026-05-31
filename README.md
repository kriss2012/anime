# 🌱 Mend — Mental Wellness Web Application

Mend is an interactive, scroll-responsive, storytelling single-page React application designed to guide users through a comforting mental health journey. Using elegant scroll animations, weather simulations, and visual metaphors, it helps users reflect on struggle, healing, growth, and long-term wellness.

---

## 🎨 Interactive Storytelling Chapters

The application is structured into six beautifully choreographed visual chapters:

1. **⛈️ Chapter I: The Storm (Home)**
   - A moody, storm-cloud themed landing section with interactive lightning flashes and animated rain overlays.
   - Core wellness statistics displaying milestones and warm introductory greetings.

2. **🌀 Chapter II: The Struggle**
   - Focuses on validating complex feelings ("The Spiral", "The Weight of Silence").
   - Features structured card decks, quote panels, and emotional validation tools.

3. **✨ Chapter II.5: The Turning Point**
   - A transitional moment showing how shifts happen quietly (drinking water, step outside, radical honesty).

4. **☀️ Chapter III: The Healing**
   - Transitioning from storm to sunrise, using absolute light rays, calming gradient transitions, and flying birds.
   - Interactive guides for breathing exercises and morning rituals.

5. **🌿 Chapter IV: The Growth**
   - Custom SVG/CSS keyframe animation simulating organic plants growing, leaves blooming, and butterflies flying when scrolled into view.

6. **🛠️ Chapter V: Daily Tools**
   - Actionable grid items supporting daily mindfulness, connection, sleep hygiene, and nature therapy practices.

7. **🚀 Final Chapter: The Future**
   - A bright, radial-gradient closure containing a particle emitter with drifting lights, a motivational send-off, and smooth return navigation.

---

## 🛠️ Technology Stack & Architecture

- **Core:** React, Vite (Fast HMR compilation)
- **Styling:** CSS3, Google Fonts (*Outfit*), Glassmorphism Effects
- **Animations:** 
  - **GSAP (ScrollTrigger):** Orchestrates synchronized section transitions and element entries on scroll.
  - **CSS Keyframes:** Drives weather simulations (lightning, rain, clouds), particle emissions, and organic plant growth.
- **Navigation:** Root-level fixed anchor-scrolling system utilizing `scrollIntoView` for high-performance transitions.

---

## 📱 Mobile & Responsive Enhancements

Mend has been optimized to offer a premium experience on both desktop and mobile viewports (including Android):
- **Frosted-Glass Navigation Bar:** Fixed pill capsule design (`position: fixed`) with a blurred background (`backdrop-filter`) to guarantee links remain readable over any content block.
- **Flexible Flow Layouts:** Replaced static viewport constraints with `min-height: 100vh; height: auto` and vertical columns to prevent overlapping text on narrow viewports.
- **Bounded Animation Viewports:** Growing plant vectors and soil bases are dynamically scaled and centered on screens under `768px` wide to prevent screen overflow.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd d:/Web-Projects/anime/vite-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5174/](http://localhost:5174/) in your browser to view the application.

### Building for Production

Compile a production-ready optimized bundle:
```bash
npm run build
```
The output files will be generated in the `dist/` directory.
