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

/** Synchronized subtle red glow pulse on the heart card */
export const heartbeatGlowAnimation = {
  boxShadow: [
    '0 12px 32px -8px rgba(27,90,174,0.38), 0 0 0 0 rgba(220,38,38,0)',
    '0 14px 36px -8px rgba(27,90,174,0.4), 0 0 18px -4px rgba(220,38,38,0.1)',
    '0 12px 32px -8px rgba(27,90,174,0.38), 0 0 0 0 rgba(220,38,38,0)',
    '0 16px 40px -6px rgba(27,90,174,0.42), 0 0 26px -2px rgba(220,38,38,0.16)',
    '0 12px 32px -8px rgba(27,90,174,0.38), 0 0 8px -4px rgba(220,38,38,0.06)',
    '0 12px 32px -8px rgba(27,90,174,0.38), 0 0 0 0 rgba(220,38,38,0)',
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
    animate: { y: [0, peak, 0] as number[] },
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
