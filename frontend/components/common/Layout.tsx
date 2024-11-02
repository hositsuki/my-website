
import Navbar from '../Navbar';
import Footer from '../Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-8 text-center flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
