'use client';
import BoldText from '@/components/bold-text';
import Button from '@/components/button';
import Title from '@/components/title';
import { fadeAnimation, slideAnimation } from '@/lib/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

/* ------------------------------- icons ------------------------------- */
import { FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi';
/* --------------------------------------------------------------------- */
export default function Header() {
  return (
    <section className='my-10'>
      <BoldText>Hi, its</BoldText>
      <Title>
        <p className='text-4xl text-white mt-2 mb-1'>Ashik Raju</p>
      </Title>

      <motion.p
        {...fadeAnimation}
        className='text-center text-gray-400 text-sm'
      >
        Marketing Expert
      </motion.p>
      <motion.div {...fadeAnimation} className='flex gap-5 w-max mx-auto mt-10'>
        <Button>Download CV</Button>
        <Button fill>Lets Talk</Button>
      </motion.div>
      <section className='grid grid-cols-5 place-items-center'>
        <LeftSideNav />
        <div className='w-max mx-auto bg-gradient-to-b from-beta to-psi  rounded-t-full pt-16 px-5 mt-5 col-span-3'>
          <motion.div {...slideAnimation('up')}>
            <Image
              src='/images/raju_main.png'
              height='500'
              width='250'
              alt='main image of raju'
              className=''
            />
          </motion.div>
        </div>
        <RightSideNav />
      </section>
    </section>
  );
}

const LeftSideNav = () => {
  return (
    <motion.div
      {...fadeAnimation}
      className='text-alpha text-lg flex flex-col gap-4 self-end [&>*]:cursor-pointer '
    >
      <FiLinkedin className='hover:fill-alpha duration-300 ease-out hover:scale-150 transition-all' />
      <FiFacebook className='hover:fill-alpha duration-300 ease-out hover:scale-150 transition-all' />
      <FiTwitter className='hover:fill-alpha duration-300 ease-out hover:scale-150 transition-all' />
    </motion.div>
  );
};

const RightSideNav = () => {
  return (
    <motion.div
      {...fadeAnimation}
      className='text-alpha text-xs self-end tracking-widest cursor-pointer hover:-translate-y-10 duration-500 w-10 flex items-center'
      style={{ writingMode: 'vertical-lr' }}
    >
      <p>Scroll Down</p>
    </motion.div>
  );
};
