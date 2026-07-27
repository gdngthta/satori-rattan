import type { Transition } from 'motion/react';

// Shared "fade in while sliding up 24px" entrance animation.
// Was copy-pasted identically into all 7 pages — now it lives here once.
// Edit the timing here and every page that imports it updates together.
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } as Transition,
};
