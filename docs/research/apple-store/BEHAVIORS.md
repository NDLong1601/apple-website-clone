# Apple Store Behaviors

## Interaction Model

- Most page sections are static horizontal scroll rails.
- Rail arrow buttons scroll the content in the live page; clone uses native horizontal scrolling.
- Product and feature cards have subtle hover lift/shadow.
- Global nav is fixed; no scroll-driven visual transition observed in the captured state.
- Lazy images load on scroll. The clone uses eager loading for primary cards to avoid blank rails in full-page screenshots.

## Responsive Behavior

- Desktop `1440px`: centered max-width content around `980-1200px`, horizontal rails extend past the viewport.
- Tablet `768px`: rails remain horizontal, card widths reduce slightly.
- Mobile `390px`: Store header stacks; cards remain horizontally scrollable; footer directory collapses to single-column rows.

## Visual Tokens

- Page background: `rgb(245,245,247)`
- Card background: `rgb(255,255,255)`
- Main text: `rgb(29,29,31)`
- Muted text: `rgb(110,110,115)`
- Blue link: `#0066cc`
- Apple retail card radius: `18px`
- Product card shadow: `0 4px 18px rgba(0,0,0,0.08)`

