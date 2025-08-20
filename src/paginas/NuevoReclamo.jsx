/*Formulario para iniciar el reclamo QUE SE VERA LUEGO DE ESTAR LOGUEADO */
import { useState } from 'react';
import styles from '../../styles/NuevoReclamo.module.css';

function FormularioReclamo() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipo: '',
    descripcion: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Reclamo enviado:', formData);
    // Aquí luego conectamos con el backend
  };

  return (
    <form id='nuevo' className={styles.formulario} onSubmit={handleSubmit}>
      <h2>Reclamo Municipal</h2>
      <label>Nombre</label>
      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />

      <label>Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Tipo de reclamo</label>
      <select name="tipo" value={formData.tipo} onChange={handleChange} required>
        <option value="">Seleccionar</option>
        <option value="iluminación">Iluminación</option>
        <option value="bacheo">Bacheo</option>
        <option value="residuos">Residuos</option>
    
      </select>

      <label>Descripción</label>
      <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} required />

      {/* ACA VA UN LABEL PARA SUBIR LA IMAGEN */}
      <p>ACA IRA LA SUBIDA DE LA IMAGEN</p>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioReclamo;