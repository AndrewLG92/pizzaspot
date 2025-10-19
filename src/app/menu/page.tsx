'use client';

import Image from 'next/image';

type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const pizzas: Pizza[] = [
  {
    id: 1,
    name: 'Margherita',
    description: 'Classic pizza with fresh mozzarella, basil, and tomato sauce.',
    price: 10.99,
    image: '/pizzas/margherita.jpg',
  },
  {
    id: 2,
    name: 'Pepperoni',
    description: 'Loaded with spicy pepperoni and melted mozzarella cheese.',
    price: 12.99,
    image: '/pizzas/pepperoni.jpg',
  },
  {
    id: 3,
    name: 'BBQ Chicken',
    description: 'Smoky BBQ sauce, grilled chicken, onions, and cilantro.',
    price: 13.99,
    image: '/pizzas/bbqchicken.jpg',
  },
  {
    id: 4,
    name: 'Veggie Supreme',
    description: 'Bell peppers, olives, onions, mushrooms, and mozzarella.',
    price: 11.99,
    image: '/pizzas/veggie.jpg',
  },
];

export default function MenuPage() {
  return (
    <main className="container my-5">
      <h1 className="text-center mb-4">Our Menu</h1>
      <div className="row">
        {pizzas.map((pizza) => (
          <div className="col-md-6 col-lg-4 mb-4" key={pizza.id}>
            <div className="card h-100 shadow-sm">
              <Image
                src={pizza.image}
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
                  <button className="btn btn-danger">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
