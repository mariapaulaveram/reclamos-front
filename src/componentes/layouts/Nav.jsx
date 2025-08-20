
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from '../../../styles/Nav.module.css';

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header"); 

    const handleScroll = () => {
      if (header) {
        const headerHeight = header.offsetHeight;
        setSticky(window.scrollY > headerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${sticky ? styles.fixed : ""}`}>
      <ul className={styles.links}>
        <li><Link to="/#home">Inicio</Link></li>
        <li><Link to="/nuevo">Nuevo Reclamo</Link></li>
        <li><Link to="/login">Ingreso</Link></li>
        <li><Link to="/#funciona">Como Funciona</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;