import { useState } from 'react';
import axios from 'axios';
import styles from "../../styles/Encuesta.module.css";

function Encuesta({ onClose })   {
    const [respuesta, setRespuesta] = useState('');
    const [comentario, setComentario] = useState('');
    const [mensajeEnviado, setMensajeEnviado] = useState(false);

   
    const handleSubmit = async (e) => {
        e.preventDefault();

       const vecino_id = parseInt(localStorage.getItem("vecino_id"), 10);

        const encuestaData = {
            vecino_id,
            respuesta,
            comentario
        };

        try {
            const res = await axios.post("http://localhost:3000/api/encuesta", encuestaData);
            console.log("Encuesta enviada:", res.data);
            setMensajeEnviado(true);
            setTimeout(() => {
                setMensajeEnviado(false);
                onClose();
            }, 1500);
        } catch (err) {
            console.error("Error al enviar encuesta:", err);
        }
    };


    return (
        <div className={styles.overlay}>
            <div className={styles.formContainer}>

                {mensajeEnviado && (
                    <div className={styles.confirmacion}>
                        ✅ Tu consulta fue enviada correctamente. ¡Gracias por contactarnos!
                    </div>
                )}
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <h5 className={styles.tituloEncuesta}>¿Qué tan satisfecho estás con nuestro servicio?</h5>

                    <select
                        className={styles.select}
                        value={respuesta}
                        onChange={(e) => setRespuesta(e.target.value)}
                        required
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="Muy satisfecho">Muy satisfecho</option>
                        <option value="Satisfecho">Satisfecho</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Insatisfecho">Insatisfecho</option>
                        <option value="Muy insatisfecho">Muy insatisfecho</option>
                    </select>

                    <textarea
                        className={styles.textarea}
                        placeholder="Comentarios adicionales"
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                    />

                    <button className={styles.boton} type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Encuesta;

