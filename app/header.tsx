import BoldText from '@/components/bold-text';
import Button from '@/components/button';
import Title from '@/components/title';

export default function Header() {
  return (
    <section>
      <BoldText>Hi, its</BoldText>
      <Title>
        <h1 className='text-4xl text-white'>Ashik Raju</h1>
      </Title>

      <p className='text-center text-gray-400 text-sm'>Marketing Expert</p>
      <div className='flex gap-5 w-max mx-auto'>
        <Button>Download CV</Button>
        <Button fill>Lets Talk</Button>
      </div>
    </section>
  );
}
