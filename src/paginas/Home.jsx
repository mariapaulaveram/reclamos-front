import styles from "../../styles/Home.module.css";
import AcordeonComoFunciona from "../componentes/AcordeonComoFunciona";
import useScrollToHash from "../hooks/useScrollToHash";
import ListaHorizontal from "../componentes/ListaUtil";

const Home = () => {
    useScrollToHash();
  return (
    <main id="home">
      <div className={styles.home}>

      {/* Presentación */}
      <section className={styles.presentacion}>
        <p>
          Desde la Dirección de Voz Ciudadana, trabajamos para canalizar tus necesidades
    y acercarlas a las áreas correspondientes para su resolución. ¡Estamos para ayudarte! .
        </p>
      </section>

      {/* Informacion */}
      <section className={styles.informacion}>
        <h4>Que podes reclamar?</h4>
        <ListaHorizontal/>
      </section>

      {/* Como funciona? */}
      <section id="funciona" className={styles.funciona}>
        <h4>Informacion Importante para tu Reclamo</h4>
        <AcordeonComoFunciona/>
      </section>
      </div>
    </main>
  );
};

export default Home;
