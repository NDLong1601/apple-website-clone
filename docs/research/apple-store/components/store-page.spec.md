# AppleStorePage Specification

## Overview
- **Target file:** `src/components/AppleStorePage.tsx`
- **Screenshot:** `docs/design-references/apple-store/apple-store-desktop-full.png`
- **Interaction model:** static horizontal scroll rails

## DOM Structure
- Fixed `StoreNavigation`
- `main` with financing ribbon, store hero, and repeated `StoreRail` sections
- `StoreFooter`

## Computed Styles
- Body/page background: `#f5f5f7`
- Content max width: `1200px`
- H1 desktop: `48px`, weight `600`, line-height `52px`
- Section title desktop: `28px`, weight `600`, line-height `32px`
- Card border radius: `18px`
- Large card size: approximately `400px x 500px`
- Help card size: approximately `480px x 500px`
- Compact feature card: approximately `313px x 240px`

## Assets
- Product nav icons: `public/images/apple-store/nav-*.png`
- Latest cards: `latest-iphone-17-pro.jpg`, `latest-macbook-neo.jpg`, `latest-iphone-17.jpg`
- Help cards: `help-specialist.jpg`, `help-video.jpg`, `store-card-50-taa-ai-202604-9139c3bc.jpg`
- Audio card: `store-card-40-airpods-max-202409_GEO_US-71ba9ac0.jpg`

## Text Content
- "Store. The best way to buy the products you love."
- "The latest. Take a look at what's new, right now."
- "Help is here. Whenever and however you need it."
- "The Apple Store difference. Even more reasons to shop with us."
- "Accessories. Essentials that pair perfectly with your favorite devices."
- "Loud and clear. Unparalleled choices for rich, high-quality sound."
- "The Apple experience. Do even more with Apple products and services."
- "Savings and offers. Exclusive deals, special stores and more."

## Responsive Behavior
- Desktop: horizontal rails, large cards.
- Mobile: header/support stack, rails remain scrollable, cards narrower.

