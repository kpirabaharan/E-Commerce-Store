import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import ModalProvider from '@/providers/ModalProvider';
import ToastProvider from '@/providers/ToastProvider';
import ThemeProvider from '@/providers/ThemeProvider';
import getStore from '@/actions/getStore';

import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
};

const themes = [
  'zinc',
  'zinc-dark',
  'slate',
  'slate-dark',
  'stone',
  'stone-dark',
  'gray',
  'gray-dark',
  'neutral',
  'neutral-dark',
  'red',
  'red-dark',
  'rose',
  'rose-dark',
  'orange',
  'orange-dark',
  'green',
  'green-dark',
  'blue',
  'blue-dark',
  'yellow',
  'yellow-dark',
  'violet',
  'violet-dark',
];

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await getStore();

  return (
    <html lang='en'>
      <body className={font.className}>
        <ThemeProvider
          themes={themes}
          attribute='class'
          defaultTheme={store.color}
          enableSystem
        >
          <Navbar name={store.name} theme={store.color} />
          <ModalProvider />
          <ToastProvider />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
