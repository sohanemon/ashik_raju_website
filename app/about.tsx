'use client';
import BoldText from '../components/bold-text';
import Title from '@/components/title';

/* ------------------------------- icons ------------------------------- */
import {
  BsFillCalendarCheckFill,
  BsFolder2Open,
  BsPeopleFill,
} from 'react-icons/bs';
import { IconType } from 'react-icons';
/* --------------------------------------------------------------------- */
export default function About() {
  return (
    <>
      <section className='my-10 min-h-screen'>
        <BoldText>Get to know</BoldText>

        <Title>
          <p className='text-4xl text-white mt-2 mb-1'>About me</p>
        </Title>

        <div className='grid grid-cols-2 w-4/5 mx-auto'>
          <div
            id='image-holder'
            style={{ backgroundImage: 'url("/images/raju_main.png")' }}
            className='rounded-xl px-6 pt-10 w-96 h-96 bg-cover after:bg-omega after:rounded-xl'
          >
            <div className='absolute bg-gradient-to-tr to-alpha from-alpha inset-0 -z-10 rounded-xl -rotate-12' />
          </div>
          {/* #TODO: details section */}
        </div>
      </section>

      <style jsx>
        {`
          #image-holder {
            position: relative;
          }
          #image-holder::before {
            position: absolute;
            content: '';
            background: inherit;
            inset: 0;
            filter: blur(50px);
            z-index: -1;
          }
          #image-holder::after {
            position: absolute;
            content: '';
            inset: 0;
            z-index: -2;
          }
        `}
      </style>
    </>
  );
}

const details: { icon: IconType; title: string; text: string }[] = [
  {
    icon: BsFillCalendarCheckFill,
    title: 'Experience',
    text: '1+ yrs of experience',
  },
  {
    icon: BsPeopleFill,
    title: 'Clients',
    text: '100+ clients',
  },
  {
    icon: BsFolder2Open,
    title: 'Project',
    text: '100+ projects done',
  },
];
