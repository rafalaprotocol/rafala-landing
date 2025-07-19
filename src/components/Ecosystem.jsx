export default function Ecosystem() {
  const features = [
    {
      id: 'pay',
      title: 'Pay',
      desc: 'Instant cross-chain USDC payments powered by Circle CCTP.'
    },
    {
      id: 'identity',
      title: 'Identity',
      desc: 'Zero-knowledge credentials for seamless onboarding.'
    },
    {
      id: 'app',
      title: 'App',
      desc: 'Unified interface to manage assets across all chains.'
    },
    {
      id: 'token',
      title: 'Token',
      desc: 'Governance token securing the Rafala ecosystem.'
    }
  ];

  return (
    <section id="ecosystem" className="py-20 px-6 max-w-6xl mx-auto">
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
