'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Hero from '@/app/components/Hero';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []); 
  return (
    <main className="container text-center">
      <Hero />
    </main>
  );
}
