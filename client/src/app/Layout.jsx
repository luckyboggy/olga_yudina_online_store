import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "widgets/layouts/Footer";
import { Header } from "widgets/layouts/Header";
import { MobilSearch } from "shared/ui/search/MobilSearch";

const Layout = ({ setMobileMenu, setMobilBasket }) => {
  const [mobilSearch, setMobilSearch] = useState(false);

  useEffect(() => {
    if (mobilSearch) {
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.scroll = "yes";
    }
  }, [mobilSearch]);

  return (
    <div>
      {mobilSearch && <MobilSearch setMobilSearch={setMobilSearch} />}
      <Header
        setMobileMenu={setMobileMenu}
        setMobilBasket={setMobilBasket}
        setMobilSearch={setMobilSearch}
        mobilSearch={mobilSearch}
      />
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
