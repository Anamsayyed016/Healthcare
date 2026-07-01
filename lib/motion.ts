import type { Transition } from 'framer-motion';

/** Premium easing — smooth, corporate, non-bouncy */
export const premiumEase = [0.45, 0.05, 0.55, 0.95] as const;

/** Card float — subtle vertical drift for hero illustrations */
export const heroCardFloat = {
  y: [0, -8, 0] as number[],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

/** Heartbeat: soft expansion → contraction → stronger beat → tiny recoil → pause (~2s) */
export const heartbeatAnimation = {
  scale: [1, 1.035, 0.985, 1.055, 1.012, 1] as number[],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: premiumEase,
    times: [0, 0.12, 0.28, 0.42, 0.52, 1],
  },
};

/** Synchronized subtle red glow pulse on the glass heart card */
export const heartbeatGlowAnimation = {
  boxShadow: [
    '0 20px 60px rgba(15,23,42,0.08), 0 0 0 0 rgba(229,57,53,0)',
    '0 22px 64px rgba(15,23,42,0.1), 0 0 20px -4px rgba(229,57,53,0.12)',
    '0 20px 60px rgba(15,23,42,0.08), 0 0 0 0 rgba(229,57,53,0)',
    '0 24px 68px rgba(15,23,42,0.11), 0 0 28px -2px rgba(229,57,53,0.18)',
    '0 20px 60px rgba(15,23,42,0.08), 0 0 10px -4px rgba(229,57,53,0.08)',
    '0 20px 60px rgba(15,23,42,0.08), 0 0 0 0 rgba(229,57,53,0)',
  ] as string[],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: premiumEase,
    times: [0, 0.12, 0.28, 0.42, 0.52, 1],
  },
};

export function floatingIconMotion(
  amplitude: number,
  duration: number,
  delay = 0,
  direction: 'up' | 'down' = 'up',
) {
  const peak = direction === 'up' ? -amplitude : amplitude;
  return {
    animate: {
      y: [0, peak, 0] as number[],
      rotate: [0, 1.2, 0, -1.2, 0] as number[],
    },
    transition: {
      duration,
      repeat: Infinity,
      ease: 'easeInOut' as const,
      delay,
    } satisfies Transition,
  };
}

export const cardHoverLift = {
  y: -3,
  transition: { duration: 0.3, ease: premiumEase },
};

export const iconHoverScale = {
  scale: 1.06,
  transition: { duration: 0.25, ease: premiumEase },
};
