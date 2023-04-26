'use client';
import BoldText from '@/components/bold-text';
import Title from '@/components/title';
import { SkillSet } from '@/global';
import { slideAnimation } from '@/lib/motion';
import { motion } from 'framer-motion';
import { SiBlueprint } from 'react-icons/si';

export default function Skills() {
  return (
    <>
      <div className='min-h-screen'>
        <BoldText>What skills I have</BoldText>

        <Title>
          <p className='text-4xl text-white mt-2 mb-1'>My skills</p>
        </Title>

        <section>
          {/* #note: skills container */}
          <motion.div
            {...slideAnimation('up')}
            className='grid grid-cols-2 w-4/5 mx-auto gap-10 mt-10'
          >
            {skills?.map((e) => (
              <div key={e.title} className='bg-omega p-7  rounded-3xl'>
                <h1 className='text-xl text-psi text-center mb-4 '>
                  {e.title}
                </h1>
                <div className='space-y-4'>
                  {e.skills?.map((e) => (
                    <div key={e.name}>
                      <div className='flex items-center gap-3 tracking-wider'>
                        <SiBlueprint className='text-psi' />
                        <span className='text-psi capitalize font-semibold'>
                          {e.name}
                        </span>
                      </div>
                      <p className='pl-7 text-beta text-sm'>{e.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </section>
      </div>
    </>
  );
}

const skills: SkillSet[] = [
  {
    title: 'Google Tag Manager',
    skills: [
      { name: 'some thing', level: 'Intermediate' },
      { name: 'more thing', level: 'Basic' },
      { name: 'one thing', level: 'Experienced' },
    ],
  },
  {
    title: 'Google Ads',
    skills: [
      { name: 'some thing', level: 'Intermediate' },
      { name: 'more thing', level: 'Basic' },
      { name: 'one thing', level: 'Experienced' },
    ],
  },
];
