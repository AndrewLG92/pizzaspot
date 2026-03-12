'use client';

import { useRouter } from 'next/navigation';

import Hero from '@/app/components/Hero';

export default function Home() {
  const router = useRouter();

  return (
    <main className="container text-center">
      <Hero />
    </main>
  );
}
