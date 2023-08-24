import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "app/App";
import { ProductStore } from "./entities/store/productStore.js";
import { UserStore } from "./entities/store/userStore.js";
import "app/style/index.scss";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));

const user = new UserStore();
const product = new ProductStore();

root.render(
  <Context.Provider
    value={{
      user,
      product,
    }}
  >
    <App />
  </Context.Provider>
);

export { user, product };
