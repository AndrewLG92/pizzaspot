'use client';

import Link from 'next/link';

export default function Footer() {
  
  

  return (
    <div 
      className="fixed-bottom">
        <hr />
        <div className="container text-center">
          <p className="mb-0">© 2024 PizzaSpot. All rights reserved.</p>
          <p className="mb-0">
            <Link href="/about" className="text-decoration-none">About Us</Link> |{' '}
            <Link href="/contact" className="text-decoration-none">Contact</Link>
          </p>
        </div>
    </div>
  );
}
