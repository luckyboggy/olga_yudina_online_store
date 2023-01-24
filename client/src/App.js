import React from "react";
import { ReactComponent as Search } from './img/svg/search.svg';
import { ReactComponent as Auth } from './img/svg/person.svg';
import { ReactComponent as Basket } from './img/svg/basket_1.svg';



function App() {
  return (
    <div className="App">
      <header>
        <div className="header__wrapper">
          <div className="header__logo">OLGA YUDINA</div>
          <div className="header__navi">
            <a href="/#">collection</a>
            <a href="/#">about</a>
            <a href="/#">delivery</a>
          </div>
          <div className="header__icons">
            <a href="/#"><Search className="header__icons__item" width="30" height="30" /></a>
            <a href="/#"><Auth className="header__icons__item" width="30" height="30" /></a>
            <a href="/#"><Basket className="header__icons__item" width="30" height="30" /></a>

          </div>
        </div>
      </header>

    </div>
  );
}

export default App;
