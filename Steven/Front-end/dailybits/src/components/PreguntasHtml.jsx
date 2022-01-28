import { urluno } from "../helpers/url";
import "../styleds/style.css"

import React, { useEffect, useState } from "react";
import axios from "axios";

export const PreguntasHTML = () => {
    const [datos, setDatos] = useState([]);
    const [posicion, setPosicion] = useState(0);
    const [puntaje, setPuntaje] = useState(0);
    const [respuestaSeleccionada, setrespuestaSeleccionada] = useState("");

    console.log(datos[0]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios
            .get(urluno)
            .then((response) => setDatos(response.data))
            .catch((error) => console.log(error));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        if (respuestaSeleccionada === datos[posicion]?.respuestacorrecta) {
            setPuntaje(puntaje + 1);
        }
    };

    const handleChange = ({ target }) => {
        setrespuestaSeleccionada({
            [target.name]: target.value,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="titulo">{datos[posicion]?.pregunta}</h1>

                <legend className="contenedorPreguntas">

                    <label className="pregunta">
                        <input
                            type="radio"
                            name={"respuestas"}
                            id={"respuesta1"}
                            value={datos[posicion]?.respuesta1}
                            onChange={handleChange}
                        />
                        {datos[posicion]?.respuesta1}
                    </label>

                    <label className="pregunta">
                        <input
                            type="radio"
                            name={"respuestas"}
                            id={"respuesta2"}
                            value={datos[posicion]?.respuesta2}
                            onChange={handleChange}
                        />
                        {datos[posicion]?.respuesta2}
                    </label>

                    <label className="pregunta">
                        <input
                            type="radio"
                            name={"respuestas"}
                            id={"respuesta3"}
                            value={datos[posicion]?.respuesta3}
                            onChange={handleChange}
                        />
                        {datos[posicion]?.respuesta3}
                    </label>

                </legend>

                <div className="btnsubmit">
                    <button type="submit" onClick={() => setPosicion(posicion + 1)}>
                        Enviar
                    </button>
                </div>

            </form>
        </div>
    );
};
