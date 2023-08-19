import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
