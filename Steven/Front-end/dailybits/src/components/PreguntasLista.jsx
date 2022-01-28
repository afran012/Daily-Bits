import React, { useEffect } from "react";
import { getQuestionByCategory } from "../selectors/getQuestionByCategory";
import { Preguntas } from "./PreguntasHtml";

export const PreguntasLista = ({ category, pregunta }) => {
    const questions = getQuestionByCategory(category, pregunta);

    // let arregloPreguntas = questions.map((question) => {
    //     return question;
    // });

    console.log(questions);

    return (
        <div>
            <Preguntas key={questions.id} datos={questions} />
        </div>
    );
};
