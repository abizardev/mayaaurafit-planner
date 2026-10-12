---
name: MayaAuraFit
description: Clean Pastel Modern Fitness Habit Tracker & Planner
colors:
  primary: "#F43F5E"
  primary-hover: "#E11D48"
  primary-soft: "#FB7185"
  neutral-bg: "#FFF8FA"
  neutral-surface: "#FFFFFF"
  card-bg: "#FFF5F8"
  card-border: "#FBCFE8"
  text-heading: "#2D2327"
  text-body: "#4A3E45"
  text-muted: "#76656E"
  accent-peach: "#FED7AA"
  accent-mint: "#ECFDF5"
  pink-mid: "#F472B6"
  selection-text: "#831843"
typography:
  display:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "'Playfair Display', Georgia, serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "8px"
  md: "16px"
  lg: "24px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-secondary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-heading}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
---

## Overview

MayaAuraFit uses a calming, aesthetic pastel design language centered around gentle self-care, daily habit consistency, and accessible printable wellness templates. It eliminates high-stress bio-tracking clutter in favor of soft blush tones, high-contrast editorial serif headlines, and tactile worksheet mockups.

## Colors

- **Primary Accent (`#F43F5E` / `#FB7185`):** Warm rose and strawberry pastel accents used for primary call-to-actions, badges, and focus rings.
- **Background Grounds (`#FFF8FA` / `#FFF5F8`):** Ultra-soft pastel blush whites that prevent eye fatigue and create a serene atmosphere.
- **Typography (`#2D2327` / `#76656E`):** Deep cocoa charcoal headings provide rich contrast (exceeding 8:1) against light pastel backgrounds.

## Typography

- **Headlines:** `Playfair Display` serif provides editorial elegance, dignity, and warmth.
- **Body & Controls:** `Plus Jakarta Sans` provides pristine legibility, clear form inputs, and friendly button labeling.

## Layout

- Fluid centered containers (max 1200px width).
- Generous vertical whitespace between sections (64px to 96px).
- Responsive 5-card grid on desktop adapting smoothly down to 1-2 columns on mobile.

## Elevation & Depth

- Ambient diffuse shadows: `box-shadow: 0 15px 40px rgba(244, 114, 182, 0.12)`.
- Subtle 1px borders with pastel tint (`#FBCFE8` or `#FCE7F3`).

## Shapes

- Pill-shaped buttons (`rounded-full`) and badges.
- Smooth rounded cards (`rounded-2xl` to `rounded-3xl` / 16px - 24px radius).

## Components

- **Capsule Badges:** Subtle pill badges with sparkles icon for section anchors.
- **Mockup Showcase:** Elevated cards framing high-resolution planner sheets with gentle hover zooms.
- **Feature Cards:** Clean 5-card grid with top image previews, bold titles, and encouraging descriptions.
- **Interactive Lightbox:** Click-to-zoom preview modal for all planner worksheets.

## Do's and Don'ts

- **Do:** Keep background tones warm and blush (`#FFF8FA`), typography editorial and calm, and borders delicate.
- **Don't:** Introduce dark tech-wearable biometric dashboard widgets, neon green alarms, or harsh medical terminology.
