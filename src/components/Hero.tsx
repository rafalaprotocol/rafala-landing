import { useState, useEffect } from "react";

export default function Hero() {
    const [dots, setDots] = useState(".");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
        }, 500);
        return () => clearInterval(interval);
    }, []);
    return (
        <section className="relative h-[calc(100vh-300px)] w-full bg-noir flex items-center justify-center">
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <h3 className="text-glacier text-2xl md:text-3xl font-display leading-tight text-center">
                    Work in progress{dots}
                </h3>
            </div>
        </section>
    );
}

