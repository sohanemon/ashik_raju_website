import BoldText from '@/components/bold-text';
import Title from '@/components/title';
import { ContactInfo } from '@/global';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      <section className='min-h-screen'>
        <BoldText>Get in touch</BoldText>

        <Title>
          <p className='text-4xl text-white mt-2 mb-1'>Contact me</p>
        </Title>
        <div className='grid grid-cols-5'>
          {/* main section */}

          <div className='col-span-2'>
            {/* left side div */}

            {contactInfo.map((e) => (
              <div key={e.link()}>{e.icon('text-7xl')}</div>
            ))}
          </div>
          <div className='col-span-3'>{/* right side div */}</div>
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
    icon: (className) => <MdEmail className={className} />,
    platform: 'Email',
    handler: 'raju@gmail.com',
    link: function () {
      return `mailto://${this.handler}`;
    },
  },
];
