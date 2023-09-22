import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import { RecipeProvider } from './context/search-results-context';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <BrowserRouter>
      <RecipeProvider>
        <App />
        <Footer />
      </RecipeProvider>
    </BrowserRouter>,
  );
