import BoldText from '@/components/bold-text';
import Title from '@/components/title';
import { ContactInfo } from '@/global';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import Form from '@/components/form';

export default function Contact() {
  return (
    <>
      <section className='min-h-screen'>
        <BoldText>Get in touch</BoldText>

        <Title>
          <p className='text-4xl text-white mt-2 mb-1'>Contact me</p>
        </Title>
        <br />
        <div className='grid grid-cols-7 w-3/5 mx-auto'>
          {/* main section */}

          <div className='col-span-2 flex flex-col gap-3 w-max '>
            {/* left side div */}

            {contactInfo.map((e) => (
              <div className='bg-alpha rounded' key={e.link()}>
                <a href={e.link()} className='flex flex-col items-center p-6'>
                  {e.icon('text-3xl')}
                  <p className='font-semibold'>{e.platform}</p>
                  <p className='text-xs mt-1'>{e.handler}</p>
                </a>
              </div>
            ))}
          </div>
          <div className='col-span-5'>
            {/* right side div */}
            <Form />
          </div>
        </div>
      </section>
    </>
  );
}

const contactInfo: ContactInfo[] = [
  {
    icon: (className) => <MdEmail className={className} />,
    platform: 'Email',
    handler: 'raju@gmail.com',
    link: function () {
      return `mailto://${this.handler}`;
    },
  },
  {
    icon: (className) => <FaFacebookMessenger className={className} />,
    platform: 'Messenger',
    handler: 'raju',
    link: function () {
      return `https://facebook.com/${this.handler}`;
    },
  },
  {
    icon: (className) => <BsLinkedin className={className} />,
    platform: 'LinkedIN',
    handler: 'raju@gmail.com',
    link: function () {
      return `mailto://${this.handler}`;
    },
  },
];
