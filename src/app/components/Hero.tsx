'use client'

import { useRouter } from 'next/navigation';

export default function Hero() {

    const router = useRouter();

    return (
        <div className="position-relative overflow-hidden" style={{ height: "80vh"}}>
            <video 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ objectFit: "cover"}}
                autoPlay
                playsInline
                loop
                muted
            
            >
                <source src="https://cwigkrmgtrehmfpfnrds.supabase.co/storage/v1/object/public/hero/video/hero-video.mp4" type="video/mp4" />
            </video>

            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "liner-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2))"}}></div>

            <div 
                className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                style={{zIndex: 10}}
            >
                <h1 className="text-white display-3 fw-bold mb-3" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)"}}>
                    Fresh. Hot. Handmade.
                </h1>
                <p className="text-white fs-4 mb-4" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)"}}>
                    The best pizza in town - made just for you.
                </p>

                <button
                    className="btn btn-warning btn-lg px4 py-2 fw-semibold"
                    onClick={() => router.push("/menu")}
                >
                    View Menu
                </button>
            </div>
        </div>
    )

}
