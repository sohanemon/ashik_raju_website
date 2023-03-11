import './globals.css';

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
      <body className='bg-psi'>{children}</body>
    </html>
  );
}
