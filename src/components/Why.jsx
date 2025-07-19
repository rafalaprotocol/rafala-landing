import { useRef } from 'react';
import useSectionObserver from '../hooks/useSectionObserver';

export default function Why() {
  const ref = useRef(null);
  useSectionObserver(ref);
  const features = [
    { title: 'Multichain USDC', desc: 'Accept payments on any chain CCTP supports' },
    { title: 'zkProofs', desc: 'Hide sender, amount, or logic using verifiable math' },
    { title: 'Quantum Resistance', desc: 'Prepare now for post-quantum security needs' },
    { title: 'Optional Compliance', desc: 'View key or MPC for emergency auditability' },
    { title: 'Fully Decentralized', desc: 'No backend, just code & cryptography' },
    { title: 'Easy to Integrate', desc: 'Modular SDKs, future plugins' },
  ];

  return (
    <section ref={ref} id="why" className="section-transition py-16 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-display text-center mb-12">Why Rafala?</h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="bg-graphite rounded-2xl p-6 shadow-md">
            <h4 className="text-xl font-display mb-2 text-glacier">{f.title}</h4>
            <p className="text-steel text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
