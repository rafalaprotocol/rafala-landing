import { useRef } from 'react';
import useSectionObserver from '../hooks/useSectionObserver';

export default function Ecosystem() {
  const ref = useRef(null);
  useSectionObserver(ref);
  const features = [
    {
      id: 'pay',
      title: 'Pay',
      desc: 'Accept USDC across chains with privacy. Merchants publish prefs to IPFS and customers pay via CCTP Fast Transfer.'
    },
    {
      id: 'identity',
      title: 'Identity',
      desc: 'Self-sovereign identity hub powered by Semaphore, Lit Protocol or Sismo.'
    },
    {
      id: 'app',
      title: 'App',
      desc: 'DeFi interface with staking, DAO modules and interchain analytics.'
    },
    {
      id: 'token',
      title: 'Token',
      desc: 'Governance token securing the Rafala ecosystem.'
    }
  ];

  return (
    <section ref={ref} id="ecosystem" className="section-transition py-20 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-display text-center mb-12">Ecosystem</h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div
            key={f.id}
            className="bg-graphite rounded-xl p-6 text-center shadow-md"
          >
            <h4 className="text-xl font-display mb-2 text-glacier">{f.title}</h4>
            <p className="text-steel text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
