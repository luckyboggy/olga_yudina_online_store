import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./layouts/Footer";
import { Header } from "./layouts/Header";
import { MobilSearch } from "./MobilSearch";

const Layout = ({ setMobileMenu, setMobilBasket }) => {
  const [mobilSearch, setMobilSearch] = useState(false);

  return (
    <div>
      <Header
        setMobileMenu={setMobileMenu}
        setMobilBasket={setMobilBasket}
        setMobilSearch={setMobilSearch}
        mobilSearch={mobilSearch}
      />

      {mobilSearch && <MobilSearch setMobilSearch={setMobilSearch} />}

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
