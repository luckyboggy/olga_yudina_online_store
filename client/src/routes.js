import { Admin } from "./pages/Admin.jsx";
import { Basket } from "./pages/Basket.jsx";
import { Shop } from "./pages/Shop.jsx";
import { Product } from "./pages/Product.jsx";
import { Main } from "./pages/Main.jsx";
import { Auth } from "./pages/Auth.jsx";
import { NoPage } from "./pages/NoPage.jsx";
import { About } from "./pages/About.jsx";
import { Delivery } from "./pages/Delivery.jsx";

import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DELIVERY_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  NOPAGE_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/consts";

const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Element: Admin,
  },
  {
    path: BASKET_ROUTE,
    Element: Basket,
  },
];

const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Element: Main,
  },
  {
    path: SHOP_ROUTE,
    Element: Shop,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Element: Product,
  },
  {
    path: REGISTRATION_ROUTE,
    Element: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Element: Auth,
  },
  {
    path: ABOUT_ROUTE,
    Element: About,
  },
  {
    path: DELIVERY_ROUTE,
    Element: Delivery,
  },
  {
    path: NOPAGE_ROUTE,
    Element: NoPage,
  },
];

export { authRoutes, publicRoutes };
