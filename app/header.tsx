import BoldText from '@/components/bold-text';
import Button from '@/components/button';
import Title from '@/components/title';
import Image from 'next/image';
import mainImage from '@/assets/images/raju_main.png';

/* ------------------------------- icons ------------------------------- */
import { FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi';
/* --------------------------------------------------------------------- */
export default function Header() {
  return (
    <section className='my-10'>
      <BoldText>Hi, its</BoldText>
      <Title>
        <h1 className='text-4xl text-white'>Ashik Raju</h1>
      </Title>

      <p className='text-center text-gray-400 text-sm'>Marketing Expert</p>
      <div className='flex gap-5 w-max mx-auto mt-10'>
        <Button>Download CV</Button>
        <Button fill>Lets Talk</Button>
      </div>
      <section className='grid grid-cols-5 place-items-center'>
        <LeftSideNav />
        <div className='w-max mx-auto bg-gradient-to-b from-beta to-psi  rounded-t-full pt-16 px-5 mt-5 col-span-3'>
          <Image
            src={mainImage}
            width='250'
            alt='main image of raju'
            className=''
          />
        </div>
        <RightSideNav />
      </section>
    </section>
  );
}

export { mainImage };

const LeftSideNav = () => {
  return (
    <div className='text-alpha text-lg flex flex-col gap-4 self-end [&>*]:cursor-pointer '>
      <FiLinkedin className='hover:fill-alpha duration-300 ease-out hover:scale-150 transition-all' />
      <FiFacebook className='hover:fill-alpha duration-300 ease-out hover:scale-150 transition-all' />
      <FiTwitter className='hover:fill-alpha duration-300 ease-out hover:scale-150 transition-all' />
    </div>
  );
};

const RightSideNav = () => {
  return (
    <div
      className='text-alpha text-xs self-end tracking-widest cursor-pointer hover:-translate-y-10 duration-500 w-10 flex items-center'
      style={{ writingMode: 'vertical-lr' }}
    >
      <p>Scroll Down</p>
    </div>
  );
};
