import { exit } from 'process';

export const transition = { type: 'spring', duration: 0.8 };

export const slideAnimation = (
  direction: 'left' | 'up' | 'right' | 'down',
  loop?: boolean
) => {
  return {
    initial: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    viewport: { once: !!loop ? false : true },
    exit: {
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      transition: { type: 'spring', duration: 0.3, delay: 0 },
      opacity: 0,
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 1 },
  },
  whileInView: {
    opacity: 1,
    transition: { ...transition, delay: 0.1 },
  },
  viewport: { once: true },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};
