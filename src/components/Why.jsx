import { useRef } from 'react';
import useSectionObserver from '../hooks/useSectionObserver';

export default function Why() {
  const ref = useRef(null);
  useSectionObserver(ref);
  const features = [
    {
      title: 'Multichain USDC',
      desc: 'Accept payments on any chain CCTP supports',
    },
    { title: 'zkProofs', desc: 'Hide sender, amount, or logic using verifiable math' },
    {
      title: 'Quantum Resistance',
      desc: 'Prepare now for post-quantum security needs',
    },
    {
      title: 'Optional Compliance',
      desc: 'View key or MPC for emergency auditability',
    },
    {
      title: 'Fully Decentralized',
      desc: 'No backend, just code & cryptography',
    },
    {
      title: 'Easy to Integrate',
      desc: 'Modular SDKs and drop-in widgets',
    },
  ];

  return (
    <section ref={ref} id="why" className="section-transition py-16 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-display text-center mb-12">Why Rafala?</h3>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <li key={f.title} className="flex flex-col">
            <h4 className="text-xl font-display text-glacier mb-1">{f.title}</h4>
            <p className="text-steel text-sm">{f.desc}</p>
          </li>
        ))}
      </ul>
      <p className="text-steel text-sm mt-8">
        Merchants gain cross-chain USDC payments with privacy, developers build composable tools, auditors can verify when required, and users stay in control of their data.
      </p>
    </section>
  );
}
