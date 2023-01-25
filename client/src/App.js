import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Main } from "./pages/Main.jsx";
import { About } from "./pages/About.jsx";
import { Delivery } from "./pages/Delivery.jsx";
import { Shop } from "./pages/Shop.jsx";
import { NoPage } from "./pages/NoPage.jsx";
import { MobileMenu } from "./components/MobileMenu";



function App() {

  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <BrowserRouter>
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />}
      <Routes>
        <Route path="/" element={<Layout setMobileMenu={setMobileMenu} />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
