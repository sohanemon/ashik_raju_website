import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

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
      <body className={`bg-psi ${poppins.className}`}>{children}</body>
    </html>
  );
}
