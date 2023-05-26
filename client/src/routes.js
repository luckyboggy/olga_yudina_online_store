import { Admin } from "./pages/Admin.jsx";
import { Basket } from "./pages/Basket.jsx";
import { Shop } from "./pages/Shop.jsx";
import { Product } from "./pages/Product.jsx";
import { MainPage } from "./pages/MainPage.jsx";
import { Auth } from "./pages/Auth.jsx";
import { NoPage } from "./pages/NoPage.jsx";
import { About } from "./pages/About.jsx";
import { Favorites } from "./pages/Favorites.jsx";
import { Delivery } from "./pages/Delivery.jsx";
import { User } from "./pages/User.jsx";

import {
  ABOUT_ROUTE,
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DELIVERY_ROUTE,
  LOGIN_ROUTE,
  MAINPAGE_ROUTE,
  FAVORITES_ROUTE,
  USER_ROUTE,
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
    path: USER_ROUTE,
    Element: User,
  },
  {
    path: BASKET_ROUTE,
    Element: Basket,
  },
];

const publicRoutes = [
  {
    path: MAINPAGE_ROUTE,
    Element: MainPage,
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
  {
    path: FAVORITES_ROUTE,
    Element: Favorites,
  },
];

export { authRoutes, publicRoutes };
