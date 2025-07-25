import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppWalletProvider } from './lib/rainbowkit';
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWalletProvider>
      <App />
    </AppWalletProvider>
  </React.StrictMode>
);
