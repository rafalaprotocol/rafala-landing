import { useRef } from 'react';
import useSectionObserver from '../hooks/useSectionObserver';

export default function About() {
  const ref = useRef(null);
  useSectionObserver(ref);
  return (
    <section ref={ref} id="about" className="section-transition py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-3xl font-display mb-4">What is Rafala?</h3>
        <p className="text-steel mb-4">Rafala is a fully decentralized protocol built for multichain USDC payments, embedded privacy via ZK, and quantum‑resistant security—all with optional compliance hooks so it can't be shut down.</p>
        <p className="text-steel mb-4">Our architecture avoids any centralized databases or backends. Every interaction is cryptographically signed, privacy‑enabled and verifiable on decentralized rails. The protocol began during the Circle Multichain USDC Hackathon but is designed for real‑world adoption.</p>
        <p className="text-steel">Rafala encompasses <strong>pay.rafala.xyz</strong> for private USDC payments, <strong>app.rafala.xyz</strong> for DeFi and staking, and <strong>identity.rafala.xyz</strong> for self‑sovereign identity.</p>
        <p className="text-steel mb-4">Rafala is a fully decentralized protocol built for multichain USDC payments, embedded privacy via ZK, and quantum-resistant security—all with optional compliance hooks so it can't be shut down.</p>
        <p className="text-steel">Our architecture avoids any centralized databases or backends. Every interaction is cryptographically signed, privacy-enabled and verifiable on decentralized rails.</p>
      </div>
      <div className="bg-graphite rounded-2xl h-48 md:h-64" aria-hidden="true" />
    </section>
  );
}
