import Header from '../components/Header';

import '../styles/globals.css';

import { Barlow } from 'next/font/google';

const barlow = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata = {
  title: 'Smart Devs',
  description:
    'Smart Devs, o fórum online desenvolvido especialmente para os programadores e entusiastas da área de tecnologia.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${barlow.className} bg-base-100 flex flex-col g antialiased`}>
        {/* @ts-expect-error Server Component */}
        <Header />
        <main className="grow min-h-screen xl:container">{children}</main>
      </body>
    </html>
  );
}
