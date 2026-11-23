import cursosRepository from "../repository/cursos.repository.js";

async function createCursosService(novoCurso) {
    const {nome, valor, tipo} = novoCurso || {}; 

    if(!nome || valor === undefined || !tipo) {
        const erro = new Error("nome, valor e tipo sao obrigatorios");
        erro.status = 400;
        throw erro;
    }

    if(typeof valor !== "number") {
        const erro = new Error("valor deve ser um numero");
        erro.status = 400;
        throw erro;
    }

    return await cursosRepository.CreateCursosRepository(novoCurso);
}
export default { createCursosService };
