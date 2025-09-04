import {useLocation, useNavigate } from 'react-router-dom';
import styles from '../../styles/VecinosLogueados.module.css';

function VecinosLogueados() {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email || 'usuario desconocido';

    const handleLogout = () => {
        navigate('/login');
    };

    return (
         <div className={styles.wrapper}>
            <div className={styles.saludoContainer}>
                <span className={styles.saludo}>¡Bienvenido, {email}!</span>
                <button onClick={handleLogout} className={styles.logout}>
                    Cerrar sesión
                </button>
            </div>
            <section id="reclamos-vecino" className={styles.presentacion}>
                <p>Mis Reclamos</p>
            </section>
        </div>
    );
}

export default VecinosLogueados;

