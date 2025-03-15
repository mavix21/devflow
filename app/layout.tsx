import './globals.css';

import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';

import { auth } from '@/auth';

import ThemeProvider from './ThemeProvider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DevFlow',
  description: `A community-driven for asking and answering programming questions.
    Get help, share knowledge, and collaborate with developers from around the world.
    Explore topics in web development, mobile app development, algorithms, data structures, and more.`,
  icons: {
    icon: '/images/site-logo.svg',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang='en' suppressHydrationWarning>
      <SessionProvider session={session}>
        <body className={`${inter.className} ${spaceGrotesk.variable}`}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
