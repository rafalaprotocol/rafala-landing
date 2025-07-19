import { useRef } from 'react';
import useSectionObserver from '../hooks/useSectionObserver';

export default function CTA() {
  const ref = useRef(null);
  useSectionObserver(ref);
  return (
    <section ref={ref} className="section-transition py-20 px-6 text-center" id="cta">
      <h3 className="text-2xl md:text-3xl font-display mb-6">Join the future of decentralized privacy.</h3>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#" className="px-6 py-3 bg-rust text-noir rounded-xl font-medium hover:opacity-90 whitespace-nowrap">Get started</a>
        <a href="https://github.com/rafalaprotocol" className="px-6 py-3 border border-rust text-rust rounded-xl hover:bg-rust hover:text-noir whitespace-nowrap">View on GitHub</a>
        <a href="https://x.com/rafalaxyz" className="px-6 py-3 border border-rust text-rust rounded-xl hover:bg-rust hover:text-noir whitespace-nowrap">Follow development</a>
      </div>
    </section>
  );
}
