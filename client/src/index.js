import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductStore } from './store/productStore.js';
import { UserStore } from './store/userStore.js';
import './style/index.scss';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new ProductStore(),
  }}>
    <App />
  </Context.Provider>
  
);

