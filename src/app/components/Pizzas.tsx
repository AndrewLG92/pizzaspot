'use client'

import { Pizza } from "@/types"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Pizzas() {
    const [pizzas, setPizzas] = useState<Pizza[]>([]);

    useEffect(() => {
        async function load() {
        const res = await fetch("/api/pizzas");
        const data = await res.json();
        setPizzas(data);
        }
        load();
    },[]);

    return (
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
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
    )
}