import React, { useState } from "react";
import styles from "./Navbar.module.css";

// Import icons directly from src/assets
import closeIcon from "../../../assets/nav/closeIcon.png";
import menuIcon from "../../../assets/nav/menuIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        OBAKE’s Mansion
      </a>

      <div className={styles.menu}>
        {/* Menu button */}
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon} // Use imported icons
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {/* Menu items */}
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Info</a>
          </li>
          <li>
            <a href="#projects">Shopping</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
