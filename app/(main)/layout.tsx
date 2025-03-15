import { ReactNode } from 'react';

import Navbar from '@/components/navigation/navbar';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>
        <Navbar />
        {children}
      </main>
    </>
  );
}
