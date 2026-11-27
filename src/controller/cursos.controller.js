import cursosService from "../service/cursos.service.js";

async function createCursosController(req, res) {
    try {
        const novoCurso = req.body;
        const cursoCriado = await cursosService.createCursosService(novoCurso);
        res.status(201).json(cursoCriado);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }  
}

async function readAllcursosController(req, res) {
    try {
        const cursos = await cursosService.readAllcursosService();
        res.status(200).json(cursos);
    } catch (error) {
        res.status(error.status || 500).json({ error: error.message });
    }
}

export default {
    createCursosController,
    readAllcursosController
};