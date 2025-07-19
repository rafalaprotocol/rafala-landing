import { useRef } from 'react';
import useSectionObserver from '../hooks/useSectionObserver';

export default function About() {
  const ref = useRef(null);
  useSectionObserver(ref);
  return (
    <section ref={ref} id="about" className="section-transition py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-3xl font-display mb-4">What is Rafala?</h3>
        <p className="text-steel">
          Rafala is a fully decentralized protocol built for multichain USDC payments, embedded privacy via ZK, and quantum-resistant security — all with optional compliance hooks to ensure it won\'t be shut down. It\'s censorship-resistant by default, compliance-enabled by choice.
        </p>
      </div>
      <div className="bg-graphite rounded-2xl h-48 md:h-64" aria-hidden="true" />
    </section>
  );
}
