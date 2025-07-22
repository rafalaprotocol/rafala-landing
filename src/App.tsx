import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MerchantSetup from './pages/MerchantSetup';
import PaymentPage from './pages/PaymentPage';
import Hero from './components/Hero';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Routes>
            <Route path="/merchant/setup" element={<MerchantSetup />} />
            <Route path="/m/:merchantAddress" element={<PaymentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
