import Header from './components/Header';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Ecosystem />
      </main>
      <Footer />
    </div>
  );
}

export default App;
