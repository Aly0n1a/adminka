import React, { useState } from 'react';
import s from './Header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <a href="/">Logo</a>
        </div>
        <nav className={`${s.nav} ${isMenuOpen ? s.open : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className={s.menuToggle} onClick={toggleMenu}>
          <span className={s.bar}></span>
          <span className={s.bar}></span>
          <span className={s.bar}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
