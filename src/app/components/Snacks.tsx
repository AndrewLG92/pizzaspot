'use client'

import { Snack } from "@/types"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Snacks() {
    const [snacks, setSnacks] = useState<Snack[]>([]);
    useEffect(() => {
        async function load() {
            const res = await fetch("/api/snacks");
            const data = await res.json();
            setSnacks(data);
        }
        load();
    },[]);
    return (
        <div className="container mt-4">
            <div className="row">
                {snacks.map((snack) => (
                <div className="col-md-6 col-lg-4 mb-4" key={snack.id}>
                    <div className="card h-100 shadow-sm">
                    <Image
                        key={snack.id}
                        src={snack.image_url || '/fpo/fpo.jpg'}
                        className="card-img-top"
                        alt={snack.name}
                        width={400}
                        height={300}
                        style={{ objectFit: 'cover', height: '200px' }}
                    />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{snack.name}</h5>
                        <p className="card-text text-muted grow">{snack.description}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}