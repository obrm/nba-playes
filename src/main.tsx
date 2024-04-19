import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { FavoriteProvider, FavoritesThemeProvider, PlayersProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FavoritesThemeProvider>
      <PlayersProvider>
        <FavoriteProvider>
          <App />
        </FavoriteProvider>
    </PlayersProvider>
    </FavoritesThemeProvider>
  </React.StrictMode>,
);
