import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });
import bg from '@/assets/bg.svg';

export const metadata = {
  title: 'Ashik Raju',
  description: 'Ashik Raju Portfolios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        style={{ backgroundImage: 'url("/bg.svg")' }}
        className={` ${poppins.className} bg-fixed`}
      >
        {children}
      </body>
    </html>
  );
}
