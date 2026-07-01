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

const heroHeartbeatTiming = {
  duration: 2,
  repeat: Infinity,
  ease: premiumEase,
  times: [0, 0.14, 0.34, 0.48, 1],
} as const;

const heroBadgeShadowRest =
  '0 20px 45px rgba(229,57,53,0.18), inset 0 1px 0 rgba(255,255,255,0.38), inset 0 -3px 10px rgba(139,0,0,0.15)';

/** Hero centerpiece — lub-dub card scale (~2s ECG cycle) */
export const heroHeartbeatBadge = {
  scale: [1, 1.03, 1, 1.06, 1] as number[],
  transition: heroHeartbeatTiming,
};

/** Hero badge ambient shadow pulse */
export const heroHeartbeatBadgeShadow = {
  boxShadow: [
    heroBadgeShadowRest,
    '0 22px 50px rgba(229,57,53,0.22), inset 0 1px 0 rgba(255,255,255,0.42), inset 0 -3px 10px rgba(139,0,0,0.14)',
    heroBadgeShadowRest,
    '0 28px 60px rgba(229,57,53,0.30), inset 0 1px 0 rgba(255,255,255,0.48), inset 0 -3px 10px rgba(139,0,0,0.12)',
    heroBadgeShadowRest,
  ] as string[],
  transition: heroHeartbeatTiming,
};

/** Hero heart glyph — subtle expansion synced to badge */
export const heroHeartbeatIcon = {
  scale: [1, 1.04, 1, 1.07, 1] as number[],
  transition: heroHeartbeatTiming,
};

/** Hero radial glow — expand and fade each beat */
export const heroHeartbeatRadialGlow = {
  opacity: [0, 0.22, 0.04, 0.28, 0] as number[],
  scale: [0.92, 1.08, 0.96, 1.12, 0.92] as number[],
  transition: heroHeartbeatTiming,
};

/** Hero ECG trace — pulse travels along the line */
export const heroHeartbeatEcg = {
  pathLength: [0.12, 0.55, 1, 0.2] as number[],
  opacity: [0.5, 0.85, 1, 0.5] as number[],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: premiumEase,
    times: [0, 0.28, 0.46, 1],
  },
};

export const heroHeartbeatBadgeHoverShadow =
  '0 30px 64px rgba(229,57,53,0.34), inset 0 1px 0 rgba(255,255,255,0.52), inset 0 -3px 10px rgba(139,0,0,0.1)';

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
