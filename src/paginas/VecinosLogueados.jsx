import styles from '../../styles/VecinosLogueados.module.css';
import CarouselVecinos from '../componentes/CarouselVecinos';

function VecinosLogueados() {
    return (
        <div className={styles.wrapper}>
            <div>
                <h2>¡Bienvenido a Voz Ciudadana!</h2>
                <p>
                    Gracias por ser parte de esta comunidad comprometida con el bienestar de nuestro municipio.
                    Este espacio fue creado para que tu voz tenga impacto: acá podés realizar tus reclamos relacionados
                    con la gestión de residuos, microbasurales, recolección, ramas, desmalezado y todo aquello que afecta
                    la limpieza y el entorno de tu barrio.
                </p>
                <p>
                    Tu participación es clave. Cada reclamo que ingresás nos ayuda a mejorar,
                    a actuar más rápido y a construir juntos una ciudad más limpia, más justa y más escuchada.
                    Porque cuando vos hablás, el municipio responde. Voz Ciudadana: tu reclamo, nuestra acción.
                </p>
            </div>
            <div>
                <CarouselVecinos />
            </div>
        </div>
    );
}

export default VecinosLogueados;

