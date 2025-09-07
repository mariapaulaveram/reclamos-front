import styles from "../../styles/Home.module.css";
import AcordeonComoFunciona from "../componentes/AcordeonComoFunciona";
import useScrollToHash from "../hooks/useScrollToHash";


const Home = () => {
    useScrollToHash();
  return (
    <main id="home">
      {/* Hero Section */}
      <div className={styles.home}>
      <section className={styles.hero}>
        <h1>Bienvenidos al sitio de Reclamos</h1>
      </section>

      {/* Presentación */}
      <section className={styles.presentacion}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit dapibus mollis convallis,
           risus netus mus neque velit placerat lacinia maecenas. Varius nascetur sapien metus ut sed in fusce porttitor, 
           rhoncus mus hac praesent libero vestibulum. Suspendisse sociis primis feugiat purus mauris ridiculus himenaeos tempus, 
           nam vitae tortor neque egestas lobortis hac, class pulvinar curae facilisis libero rutrum aenean.
        </p>
      </section>
      
      {/* Como funciona? */}
      <section id="funciona" className={styles.funciona}>
        <h2>Como Funciona?</h2>
        <AcordeonComoFunciona/>
      </section>

      {/* Contacto */} {/* aca va un formulario de contacto que llega por mailtrap*/}
      <section id="reclamo" className={styles.reclamoSection}>
        
      </section>
      </div>
    </main>
  );
};

export default Home;
