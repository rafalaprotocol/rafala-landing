import { useRef } from 'react';
import useSectionObserver from '../hooks/useSectionObserver';

export default function Footer() {
  const year = new Date().getFullYear();
  const ref = useRef(null);
  useSectionObserver(ref);

  return (
    <footer ref={ref} className="section-transition border-t border-graphite py-8 px-6 text-center text-sm">
      <div className="space-x-6 mb-4">
        <a href="https://github.com/rafalaprotocol" className="hover:text-rust">GitHub</a>
        <a href="mailto:contact@rafala.xyz" className="hover:text-rust">Contact</a>
        <a href="https://docs.rafala.xyz" className="hover:text-rust">Docs</a>
        <a href="https://x.com/rafalaxyz" className="hover:text-rust">Community</a>
      </div>
      <p className="text-steel">© {year} Rafala.xyz — Decentralized by Design.</p>
      <p className="text-rose mt-2">Rafala is experimental software. Use at your own risk.</p>
    </footer>
  );
}
