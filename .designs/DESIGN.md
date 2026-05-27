---
name: Event Horizon Terminal
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#baccb0'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#85967c'
  outline-variant: '#3c4b35'
  surface-tint: '#2ae500'
  primary: '#efffe3'
  on-primary: '#053900'
  primary-container: '#39ff14'
  on-primary-container: '#107100'
  inverse-primary: '#106e00'
  secondary: '#dcfdff'
  on-secondary: '#00373a'
  secondary-container: '#00f1fd'
  on-secondary-container: '#006a6f'
  tertiary: '#fff9f8'
  on-tertiary: '#67001d'
  tertiary-container: '#ffd3d5'
  on-tertiary-container: '#c3003f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#79ff5b'
  primary-fixed-dim: '#2ae500'
  on-primary-fixed: '#022100'
  on-primary-fixed-variant: '#095300'
  secondary-fixed: '#6ff6ff'
  secondary-fixed-dim: '#00dce6'
  on-secondary-fixed: '#002022'
  on-secondary-fixed-variant: '#004f53'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b8'
  on-tertiary-fixed: '#40000f'
  on-tertiary-fixed-variant: '#91002d'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  terminal-header:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  terminal-header-mobile:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
  body-code:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-expanded:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  label-status:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  button-text:
    fontFamily: Space Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 14px
spacing:
  terminal-margin: 2rem
  gutter: 1rem
  unit: 4px
  container-max: 1000px
---

## Brand & Style
The design system establishes a high-tension, claustrophobic atmosphere centered on an abandoned deep-space vessel. The brand personality is cold, mechanical, and cryptic, evoking the feeling of interacting with a dying AI through a flickering CRT terminal.

The aesthetic follows a **Cyberpunk-Brutalist** hybrid. It utilizes raw, functional layouts paired with "dirty" digital effects like scanlines, chromatic aberration, and flickering glows. The goal is to make the user feel like a trespasser in a restricted system, where every line of text could be a lifeline or a warning.

## Colors
The palette is rooted in absolute darkness to represent the void of space and powered-down corridors.

- **Background (#050505):** A "true black" used for the primary terminal surface to maximize contrast with glowing elements.
- **Primary (#39FF14):** "System Green." Used for standard data output, healthy system status, and primary navigation. It carries a high-intensity glow.
- **Secondary (#00F3FF):** "Cryo Blue." Used for interactive elements, hints, and environmental descriptions.
- **Tertiary (#FF0055):** "Critical Error." Reserved exclusively for warnings, high-tension moments, and locked pathways.

## Typography
The typography system mimics a command-line interface. **JetBrains Mono** is the primary driver for its exceptional legibility in low-light, high-glow environments. 

Headlines should appear as if "printed" to the screen, often accompanied by a cursor underscore `_`. Body text uses a generous line height to maintain readability during long narrative segments. All labels and metadata use **Space Mono** in uppercase to differentiate system telemetry from story narrative.

## Layout & Spacing
The layout uses a **Fixed Grid** model to simulate a physical monitor screen. 

- **Desktop:** A centered 1000px container with a 2px "monitor frame" border. Content is padded heavily to prevent text from hitting the screen edges.
- **Mobile:** Full-bleed layout with a persistent "System Header" at the top and a "Command Input" at the bottom.
- **Rhythm:** Spacing follows a 4px base unit. Interaction points are separated by 24px (6 units) to ensure the interface feels sparse and utilitarian.

## Elevation & Depth
This design system avoids traditional shadows. Instead, it uses **Luminous Layering**:

- **Glow Effects:** Instead of drop shadows, active elements use an outer glow (box-shadow) of `0 0 10px` in the primary or secondary color.
- **Scanlines:** A semi-transparent overlay of horizontal lines covers the entire UI at `0.05` opacity to add texture.
- **Backdrop Blurs:** When modals appear (e.g., inventory), they use a heavy backdrop blur (20px) with a 20% tint of the primary color to simulate light refraction on a glass screen.
- **Borders:** All containers use a 1px solid border. Active containers use a double-border effect.

## Shapes
The shape language is strictly **Sharp (0)**. In a futuristic industrial environment, rounded corners are an unnecessary luxury. All buttons, containers, and input fields must have 90-degree angles. To add visual interest, use "clipped corners" (45-degree angled cuts) on the top-right and bottom-left of primary containers.

## Components
- **Command Buttons:** Transparent backgrounds with 1px solid Primary Color borders. On hover, the button fills with the Primary Color and text inverts to the Neutral Black.
- **Terminal Inputs:** A single line starting with a `>` prompt. The cursor should blink at a 1s interval.
- **Status Chips:** Small rectangular boxes with a "Scanning" animation (a vertical line moving left-to-right).
- **Progress Bars:** Segmented blocks `[||||||----]` rather than a smooth fill, reinforcing the retro-tech feel.
- **Glitch Cards:** Narrative cards that occasionally "jitter" or "flicker" using CSS transforms to indicate system instability or psychic interference.
- **Inventory Grid:** A strict 1x1 aspect ratio grid where items are represented by wireframe icons in Secondary Blue.