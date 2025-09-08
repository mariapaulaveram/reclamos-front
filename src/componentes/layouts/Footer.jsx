import styles from "../../../styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.contactInfo}>
                    <h5>Contacto</h5>
                    <p>
                        <i className="fas fa-map-marker-alt"></i>{' '}
                        Calle Lorem 110, Chaco, Argentina
                    </p>
                    <p>
                        <i className="fas fa-envelope"></i>{' '}
                        consultas@loremipsum.com
                    </p>
                    <p>
                        <i className="fas fa-phone"></i>{' '}
                        +54 123 456 789
                    </p>
                </div>


                <div className={styles.social}>
                    <h5>Seguinos</h5>
                    <ul className={styles.socialIcons}>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i> Facebook
                            </a>
                        </li>
                    </ul>
                </div>
               <div className={styles.footerEscudo}>
                 <img  src="../../public/logo.png" width="100" alt="Escudo municipal" />
               </div>
            </div>

            <div className={styles.footerBottom}>
                <p>Municipalidad Lorem Ipsum – Todos los derechos reservados ©</p>
            </div>
        </footer>
    );
};

export default Footer;

