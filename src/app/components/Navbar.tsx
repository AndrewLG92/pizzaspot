'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
//import { supabase } from '@/lib/supabaseclient';
///import { useState, useEffect} from 'react';

export default function Navbar() {
  //const [logoutbtn, setlogoutbtn] = useState(Boolean);
  const pathname = usePathname();

  // useEffect(() => {
  //   checkUserSession();
  // }, [])

  // const checkUserSession = async () => {
  //   const { data, error} = await supabase.auth.getSession();
  //   const { session } = data;
  //   console.log(session);
  //   if(session){
  //     console.log('session:', session);
  //     setlogoutbtn(true);
  //   }else{
  //     setlogoutbtn(false);
  //   }
  // }
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">🍕 PizzaSpot</Link>
        
        <div className="dropdown" data-bs-theme="dark">
          <button
            className="btn btn-dark"
            type="button"
            data-bs-toggle="dropdown"
          >
            <i className="bi bi-list fs-3"></i>
          </button>
          <ul className="dropdown-menu">
            {['/', '/menu', '/about', '/contact'].map((path) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`dropdown-item ${pathname === path ? 'active' : ''}`}
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
