import ListGroup from 'react-bootstrap/ListGroup';
import { FaTrash, FaRecycle, FaLeaf, FaQuestion } from 'react-icons/fa';
import styles from "../../styles/ListaUtil.module.css";

function ListaHorizontal() {
  return (
    <div className={styles.listaContenedor}>
      <ListGroup horizontal className={styles.listaHorizontal}>
        <ListGroup.Item className={styles.itemHover}>
          <FaTrash className={styles.icono} />
          Microbasurales
        </ListGroup.Item>
        <ListGroup.Item className={styles.itemHover}>
          <FaRecycle className={styles.icono} />
          Recolección y Residuos
        </ListGroup.Item>
        <ListGroup.Item className={styles.itemHover}>
          <FaLeaf className={styles.icono} />
          Ramas y Desmalezado
        </ListGroup.Item>
        <ListGroup.Item className={styles.itemHover}>
          <FaQuestion className={styles.icono} />
          Otros Residuos...
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ListaHorizontal;


