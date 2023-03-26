import BoldText from '@/components/bold-text';
import Title from '@/components/title';
import { SkillSet } from '@/global';

export default function Skills() {
  return (
    <>
      <div className='min-h-screen'>
        <BoldText>What skills I have</BoldText>

        <Title>
          <p className='text-4xl text-white mt-2 mb-1'>My skills</p>
        </Title>

        <section>{/* #note: skills container */}</section>
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
