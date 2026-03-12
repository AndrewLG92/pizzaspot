'use client';

import { useRouter } from 'next/navigation';

import Hero from '@/app/components/Hero';

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Hero />
    </main>
  );
}
