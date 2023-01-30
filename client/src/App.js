import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MobileMenu } from "./components/MobileMenu";

import { authRoutes, publicRoutes } from "./routes.js";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const isAuth = true;

  return (
    <BrowserRouter>
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

      <Routes>
        <Route path="/" element={<Layout setMobileMenu={setMobileMenu} />}>
          {isAuth &&
            authRoutes.map(({ path, Element }) => (
              <Route path={path} element={<Element />} key={path} />
            ))}
          {publicRoutes.map(({ path, Element }) => (
            <Route path={path} element={<Element />} key={path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
