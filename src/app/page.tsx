'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();


  return (
    <main className="container text-center mt-5">
      <h1>Welcome to the PizzaSpot 🍕</h1>
      <p className="lead">Hot, fresh, and made to order — every time.</p>
      <button className="btn btn-danger btn-lg mt-3" onClick={() => router.push('/menu')}>View Menu</button>
    </main>
  );
}
