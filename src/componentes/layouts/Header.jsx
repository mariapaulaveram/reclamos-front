import styles from '../../../styles/Header.module.css';

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header id="hader" className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img
            className={styles.logoImg}
            src="logo.jpg"
            width="400"
            alt="Escudo"
          />
        </Link>
        <h1 className={styles.titulo}>Sistema de Reclamos Municipales</h1>
      </div>
    </header>
  );
};

export default Header;


