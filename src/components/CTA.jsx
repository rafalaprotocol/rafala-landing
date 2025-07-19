export default function CTA() {
  return (
    <section className="py-20 px-6 text-center" id="cta">
      <h3 className="text-2xl md:text-3xl font-display mb-6">Join the future of decentralized privacy.</h3>
      <div className="space-x-4">
        <a href="#" className="px-6 py-3 bg-rust text-noir rounded-xl font-medium hover:opacity-90">Get started</a>
        <a href="https://github.com/rafalaprotocol" className="px-6 py-3 border border-rust text-rust rounded-xl hover:bg-rust hover:text-noir">View on GitHub</a>
        <a href="https://x.com/rafalaxyz" className="px-6 py-3 border border-rust text-rust rounded-xl hover:bg-rust hover:text-noir">Follow development</a>
      </div>
    </section>
  );
}
