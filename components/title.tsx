'use client';
import { motion } from 'framer-motion';
import { Child } from '../global';
import { slideAnimation } from '@/lib/motion';
export default function Title({ children }: Child) {
  return (
    <motion.h2
      {...slideAnimation('right')}
      className='font-semibold text-2xl text-alpha text-center mx-auto'
    >
      {children}
    </motion.h2>
  );
}
