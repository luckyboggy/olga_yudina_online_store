import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";

const Layout = () => {

  return (
    <div>
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
