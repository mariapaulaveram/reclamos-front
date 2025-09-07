import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from '../../../styles/Nav.module.css';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  //const email = location.state?.email || localStorage.getItem("email") || "usuario desconocido";

  const [email, setEmail] = useState("usuario desconocido");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, [location]);


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


  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("vecino_id");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <nav className={`${styles.navbar} ${sticky ? styles.fixed : ""}`}>
      <ul className={styles.links}>
        {!isLoggedIn ? (
          <>
            <li><Link to="/#home">Inicio</Link></li>
            <li><Link to="/login">Ingreso</Link></li>
            <li><Link to="/registro">Registro</Link></li>
            <li><Link to="/#funciona">Cómo Funciona</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/logueados">Inicio Logueados</Link></li>
            <li><Link to="/nuevo-reclamo">Nuevo Reclamo</Link></li>
            <li><Link to="/reclamos">Ver Reclamos</Link></li>
          </>
        )}
      </ul>

      {isLoggedIn && (
        <div className={styles.saludoContainer}>
          <span className={styles.saludo}>¡Bienvenido, {email}!</span>
          <button onClick={handleLogout} className={styles.logout}>
            Cerrar sesión
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

