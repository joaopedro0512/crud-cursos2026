import { Router } from "express";
import cursosController from "../controller/cursos.controller.js";

const router = Router();

router.post("/cursos", cursosController.createCursosController);

export default router;