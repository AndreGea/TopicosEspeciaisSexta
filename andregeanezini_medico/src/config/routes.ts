import { Router } from "express";
import { MedicoController } from "../controllers/MedicoController";

const router = Router();
const medicoController = new MedicoController();

router.post("/medico/cadastrar", medicoController.cadastrar);
router.post("/medico/buscar/crm", medicoController.buscar);
router.get("/medico/listar", medicoController.listar);
router.get("/medico/alterar", medicoController.alterar);
router.post("/medico/remover/crm", medicoController.remover);

export { router };