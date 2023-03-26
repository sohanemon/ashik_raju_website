'use client';
import BoldText from '../components/bold-text';
import Title from '@/components/title';

/* ------------------------------- icons ------------------------------- */
import {
  BsFillCalendarCheckFill,
  BsFillFolderFill,
  BsPeopleFill,
} from 'react-icons/bs';
import Button from '@/components/button';
/* --------------------------------------------------------------------- */
export default function About() {
  return (
    <>
      <div className='grid place-items-center min-h-screen'>
        <section className='my-10 min-h-screen'>
          <BoldText>Get to know</BoldText>

          <Title>
            <p className='text-4xl text-white mt-2 mb-1'>About me</p>
          </Title>

          <div className='grid grid-cols-2 w-4/5 mx-auto place-items-center mt-10'>
            <aside
              id='image-holder'
              style={{ backgroundImage: 'url("/images/raju_main.png")' }}
              className='rounded-xl px-6 pt-10 w-60 h-72 bg-cover after:bg-omega after:rounded-xl'
            >
              <div className='absolute bg-gradient-to-tr to-alpha from-alpha inset-0 -z-10 rounded-xl -rotate-12' />
            </aside>
            {/* #TODO: details section */}
            <aside className='grid grid-cols-3 gap-6 h-max'>
              {details?.map((e) => (
                <div
                  key={e.title}
                  className='flex flex-col items-center bg-alpha h-max p-5 rounded-lg shadow shadow-omega h-full'
                >
                  {e.icon}
                  <p className='text-psi font-semibold text-lg'>{e.title}</p>
                  <p className='text-omega text-xs'>{e.text}</p>
                </div>
              ))}
              <div className='col-span-full'>
                <p className='text-alpha mb-6'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                  obcaecati neque consectetur, corrupti earum voluptas officiis
                  ullam voluptatibus dolorem odit placeat nulla sapiente
                  assumenda sit exercitationem, molestias aspernatur impedit
                  non.
                </p>
                <Button fill>Lets connect</Button>
              </div>
            </aside>{' '}
          </div>
        </section>
      </div>

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

const details: {
  icon: React.ReactNode;
  title: string;
  text: string;
}[] = [
  {
    icon: <BsFillCalendarCheckFill className='text-psi text-2xl' />,
    title: 'Experience',
    text: '1+ yrs of experience',
  },
  {
    icon: <BsPeopleFill className='text-psi text-2xl' />,
    title: 'Clients',
    text: '100+ clients',
  },
  {
    icon: <BsFillFolderFill className='text-psi text-2xl' />,
    title: 'Project',
    text: '100+ projects done',
  },
];
