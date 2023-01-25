import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer__wrapper">
        <div className="footer__copyright">© {year} luckyboggy</div>
      </div>
    </footer>
  );
};

export { Footer };
