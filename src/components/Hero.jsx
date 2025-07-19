import { useRef } from 'react';
import useSectionObserver from '../hooks/useSectionObserver';

export default function Hero() {
  const ref = useRef(null);
  useSectionObserver(ref);
  return (
    <section ref={ref} className="section-transition min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-display mb-6 leading-tight">
        Decentralized rails for compliant privacy.
      </h2>
      <p className="text-steel text-lg max-w-xl">
        Rafala powers private, cross-chain USDC transfers using Circle CCTP V2, zero-knowledge identity and quantum-safe cryptography—all with an open door for regulatory compliance.
      </p>
      <div className="mt-10">
        <a
          href="#ecosystem"
          className="inline-block px-8 py-3 bg-rust text-noir font-medium rounded-xl hover:opacity-90 transition"
        >
          Explore Rafala
        </a>
      </div>
    </section>
  );
}
