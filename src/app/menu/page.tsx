'use client';

import Image from 'next/image';
import { supabase } from '@/lib/supabaseclient';
import { useEffect, useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { Pizza } from "@/types";


export default function MenuPage() {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const { addToCart, cart, total } = useCart();

  useEffect(() => {
    async function fetchPizzas() {
      const {data,error} = await supabase.from('pizzas').select('*');
      if(error) console.error('Error fetching pizzas: ', error);
      else setPizzas(data);
    }
    fetchPizzas();
  }, []);
  
  console.log('Pizzas:', pizzas);

  return (
    <main className="container my-5">
      <h1 className="text-center mb-4">Our Menu</h1>
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-6 col-lg-4 mb-4" key={pizza.id}>
            <div className="card h-100 shadow-sm">
              <Image
                key={pizza.id}
                src={pizza.image ?? '/fpo/fpo.jpg'}
                className="card-img-top"
                alt={pizza.name}
                width={400}
                height={300}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text text-muted flex-grow-1">{pizza.description}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold">${pizza.price.toFixed(2)}</span>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => addToCart({
                      id: pizza.id,
                      name: pizza.name,
                      price: pizza.price,
                      quantity: 1, // 👈 must include quantity
                      image: pizza.image,
                    })}>
                      Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <h3>Cart Total: ${total.toFixed(2)}</h3>
        <p>Items in Cart: {cart.length}</p>
      </div>
    </main>
  );
}
