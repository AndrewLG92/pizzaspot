'use client'

import { Beverage } from "@/types"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Beverages() {
    const [beverages, setBeverages] = useState<Beverage[]>([]);
    useEffect(() => {
        async function load() {
            const res = await fetch("/api/beverages");
            const data = await res.json();
            setBeverages(data);
        }
        load();
    },[]);
    return (
        <div className="container mt-4">
            <div className="row">
                {beverages.map((beverage) => (
                <div className="col-md-6 col-lg-4 mb-4" key={beverage.id}>
                    <div className="card h-100 shadow-sm">
                    <Image
                        key={beverage.id}
                        src={beverage.image_url ?? '/fpo/fpo.jpg'}
                        className="card-img-top"
                        alt={beverage.name} 
                        width={400}
                        height={300}
                        style={{ objectFit: 'cover', height: '200px' }}
                    />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{beverage.name}</h5>
                        <p className="card-text text-muted flex-grow-1">{beverage.description}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}