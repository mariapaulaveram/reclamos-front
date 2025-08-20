import { useState } from 'react';
import styles from '../../styles/Login.module.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError('Completa todos los campos');
      return;
    }

    console.log('Ingreso enviado:', formData);
    // Aquí luego conectaremos con el backend para validar el ingreso
  };

  return (
    <form id="login" className={styles.login} onSubmit={handleSubmit}>
      <h2>Ingreso al sistema de reclamos</h2>

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Contraseña</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit">Ingresar</button>
    </form>
  );
}

export default Login;
