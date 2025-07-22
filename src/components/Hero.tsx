import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import RafaleRing from "./RafaleRing";

export default function Hero() {
    const [dots, setDots] = useState(".");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
        }, 500);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative h-[calc(100vh-140px)] w-full bg-noir flex items-center justify-center">
            {/* Container pătrat fix */}
            <div className="relative w-[min(90vw,90vh)] aspect-square">
                {/* Canvas 3D */}
                <Canvas className="absolute inset-0" camera={{ position: [0, 0, 3] }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[0, 0, 5]} intensity={20} color={"#C08A2D"} />
                    <RafaleRing />
                </Canvas>

                {/* Text centrat */}
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <h3 className="text-glacier text-2xl md:text-3xl font-display leading-tight text-center">
                        Work in progress{dots}
                    </h3>
                </div>
            </div>
        </section>
    );
}

