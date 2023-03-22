import BoldText from '@/components/bold-text';
import Title from '@/components/title';

export default function Header() {
  return (
    <section>
      <BoldText>Hi, its</BoldText>
      <Title>
        <h1 className='text-4xl text-white'>Ashik Raju</h1>
      </Title>

      <p className='text-center text-gray-400 text-sm'>Marketing Expert</p>
    </section>
  );
}
