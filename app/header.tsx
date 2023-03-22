import BoldText from '@/components/bold-text';
import Button from '@/components/button';
import Title from '@/components/title';
import Image from 'next/image';
import mainImage from '@/assets/images/raju_main.png';
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
      <div>
        <Image src={mainImage} placeholder='blur' alt='main image of raju' />
      </div>
    </section>
  );
}

export { mainImage };
