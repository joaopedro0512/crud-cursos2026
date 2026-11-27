import cursosRepository from "../repository/cursos.repository.js";

async function createCursosService(novoCurso) {
    const {nome, area, nivel, modalidade} = novoCurso || {}; 

    if(!nome || !area || !nivel || !modalidade) {
        const erro = new Error("nome, area, nivel e modalidade sao obrigatorios");
        erro.status = 400;
        throw erro;
    }

    if(typeof area !== "string") {
        const erro = new Error("area deve ser uma string");
        erro.status = 400;
        throw erro;
    }

    return await cursosRepository.CreateCursosRepository(novoCurso);
}

async function readAllcursosService() {
    return await cursosRepository.readAllcursosRepository();
}
export default { createCursosService, readAllcursosService };
