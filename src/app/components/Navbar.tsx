'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">🍕 PizzaSpot</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['/', '/menu', '/about', '/contact'].map((path) => (
              <li key={path} className="nav-item">
                <Link
                  href={path}
                  className={`nav-link ${pathname === path ? 'active' : ''}`}
                >
                  {path === '/' ? 'Home' : path.replace('/', '').replace(/^./, (s) => s.toUpperCase())}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
