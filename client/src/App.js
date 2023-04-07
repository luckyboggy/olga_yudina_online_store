import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MobileMenu } from "./components/MobileMenu";
import { authRoutes, publicRoutes } from "./routes.js";
import { Context } from "./index.js";
import { observer } from "mobx-react-lite";
import { check } from "./http/userAPI.js";
import { getBasket } from "./http/basketAPI.js";
import { fetchBasketProduct } from "./http/basketProductAPI.js";

const App = observer(() => {

  const { user } = useContext(Context);

  const [loading, setLoading] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);


  useEffect(() => {
    check().then(data => {
      user.setUser(data);
      user.setIsAuth(true);
    }).finally(() => {
      getBasket(user.user.id).then((data) => {
        user.setBasketId(data.id)
      }).then(() => {
        fetchBasketProduct(user.basketId).then((data) => {
          user.setBasketCount(data.count);
          user.setBasketItems(data.rows);
        })
      })
      setLoading(false)
    })
  }, [])



  return (
    <BrowserRouter>
      <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

      <Routes>
        <Route path="/" element={<Layout setMobileMenu={setMobileMenu} />}>
          {user.isAuth &&
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
})

export default App;
