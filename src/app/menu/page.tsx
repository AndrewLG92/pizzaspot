'use client';

//import { useCart } from '@/hooks/useCart';
import { useState } from "react";
import Pizzas from "../components/Pizzas";
import Beverages from "../components/Beverages";
import Snacks from "../components/Snacks";

export default function MenuPage() {
  
  const tabs = ["Pizzas", "Beverages", "Snacks"];
  const [active, setActive] = useState(tabs[0]);
  //const { addToCart, cart, total } = useCart();

  
  const checkActiveBtn = () => {
    if (active === "Pizzas") {
      return <Pizzas />;
    }else if (active === "Beverages") {
      return <Beverages />;
    }else if ( active === "Snacks") {
      return <Snacks />;
    }
  }

  return (
    <main className="container my-5">
      <h1 className="text-center mb-4">Menu</h1>
      <div className="container w-75">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-item bg-warning ${active === tab ? "active" : ""}`}
              onClick={() => setActive(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {checkActiveBtn()}
      </div>
    </main>
  );
}
