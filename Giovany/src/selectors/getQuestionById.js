export const getQuestionById = (id, preguntas) => {
    return preguntas.find((pregunta) => pregunta.id === id);
};
