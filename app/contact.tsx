import BoldText from '@/components/bold-text';
import Title from '@/components/title';
import { ContactInfo } from '@/global';
import { MdEmail } from 'react-icons/md';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

export default function Contact() {
  return (
    <>
      <section className='min-h-screen'>
        <BoldText>Get in touch</BoldText>

        <Title>
          <p className='text-4xl text-white mt-2 mb-1'>Contact me</p>
        </Title>
        <div className='grid grid-cols-7 w-3/5 mx-auto'>
          {/* main section */}

          <div className='col-span-2'>
            {/* left side div */}

            {contactInfo.map((e) => (
              <div className='bg-alpha' key={e.link()}>
                <a href={e.link()}>
                  {e.icon('text-3xl')}
                  <p>{e.platform}</p>
                  <p>{e.handler}</p>
                </a>
              </div>
            ))}
          </div>
          <div className='col-span-5'>{/* right side div */}</div>
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