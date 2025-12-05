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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#darkDropDown"
          aria-controls="darkDropDown"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
        </button>

        <div className="collapse navbar-collapse" id="darkDropDown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <button 
                className="btn btn-dark"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-list fs-3"></i>
              </button>
              <ul
                className="dropdown-menu dropdown-menu-dark"
              >
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
            </li>
            
            {/* <button
              className={`nav-link ${logoutbtn ? '' : 'd-none'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              Logout
            </button> */}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
