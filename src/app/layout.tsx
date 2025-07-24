import type { Metadata } from 'next';
import { Geist, Bitcount_Grid_Double, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppHeader from '@/components/ui/header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const bitcountGridDouble = Bitcount_Grid_Double({
  variable: '--font-bitcount-grid-double',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aerwyrm DSP',
  description:
    'Aerwyrm DSP is a living notebook of my journey of learning about digital signal processing.',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bitcountGridDouble.variable} antialiased min-h-screen flex flex-col`}
      >
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
