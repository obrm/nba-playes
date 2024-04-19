import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { FavoriteProvider, PlayersProvider, UIProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider>
      <PlayersProvider>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
      </PlayersProvider>
    </UIProvider>
  </React.StrictMode>,
);
