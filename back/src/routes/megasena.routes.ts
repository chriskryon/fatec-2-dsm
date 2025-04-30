import { Router } from "express";
import { MegaSenaController } from "../controllers/megasena.controller";

const router = Router();
const megaSenaController = new MegaSenaController();

router.get("/", megaSenaController.getRecente.bind(megaSenaController));

router.get(
	"/:concurso",
	megaSenaController.getByConcurso.bind(megaSenaController),
);

export default router;
