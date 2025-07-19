import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Why from './components/Why';
import Ecosystem from './components/Ecosystem';
import CTA from './components/CTA';
import Footer from './components/Footer';
import VortexBackground from './components/VortexBackground';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative overflow-hidden">
      <VortexBackground />
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Why />
        <Ecosystem />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
