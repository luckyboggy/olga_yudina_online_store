import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";

const Layout = ({ setMobileMenu, setMobilBasket }) => {
  return (
    <div>
      <Header setMobileMenu={setMobileMenu} setMobilBasket={setMobilBasket} />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
