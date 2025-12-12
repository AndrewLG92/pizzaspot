'use client';

//import { useCart } from '@/hooks/useCart';
import Pizzas from "../components/Pizzas";

export default function MenuPage() {
  //const { addToCart, cart, total } = useCart();

  
  

  return (
    <main className="container my-5">
      <h1 className="text-center mb-4">Our Menu</h1>
      <div className="container-fluid">
        <div className="tabs">
          <button className="tab-item active">Pizzas</button>
          <button className="tab-item">Beverages</button>
          <button className="tab-item">Snacks</button>
        </div>
      </div>
      
    </main>
  );
}
