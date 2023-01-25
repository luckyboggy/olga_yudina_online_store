import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";

const Layout = ({ setMobileMenu }) => {
  return (
    <div>
      <Header setMobileMenu={setMobileMenu} />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
