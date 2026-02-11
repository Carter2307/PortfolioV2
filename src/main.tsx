import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { PlayerProvider } from '@context/PlayerContext';
import { PreloaderProvider } from '@context/PreloaderContext';
import '@styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PreloaderProvider>
        <PlayerProvider>
          <App />
        </PlayerProvider>
      </PreloaderProvider>
    </BrowserRouter>
  </React.StrictMode>
);
