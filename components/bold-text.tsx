'use client';
import { motion } from 'framer-motion';
import { Child } from '../global';
import { slideAnimation } from '@/lib/motion';
export default function BoldText({ children }: Child) {
  return (
    <motion.p
      {...slideAnimation('left')}
      className='font-semibold text-beta text-center mx-auto'
    >
      {children}
    </motion.p>
  );
}
