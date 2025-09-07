import styles from '../../../styles/Header.module.css';



const Header = () => {
  return (
    <header id="hader" className={styles.header}>
      <div>
        <section className={styles.heroBanner}>
          <h1 className={styles.titulo}>Voz Ciudadana</h1>
        </section>
      </div>
    </header>
  );
};

export default Header;


