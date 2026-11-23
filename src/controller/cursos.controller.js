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

export default {
    createCursosController,
};