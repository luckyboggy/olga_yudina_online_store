import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductStore } from './store/productStore.js';
import { UserStore } from './store/userStore.js';
import './style/index.scss';


export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));

const user = new UserStore();
const product =  new ProductStore();

root.render(
  <Context.Provider value={{
    user,
    product,
  }}>
    <App />
  </Context.Provider>
);

export {user, product}