export const getQuestionByCategory = (categoria, preguntas) => {
    const validarCategoria = ["HTML", "CSS", "JS"];

console.log(preguntas)

    if (!validarCategoria.includes(categoria)) {
        throw new Error(`La categoria "${categoria}" no es correcto`);
    }

    return preguntas.filter((pregunta) => pregunta.categoria === categoria);
};
