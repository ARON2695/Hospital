import {Router} from 'express';
import { actualizarPaciente, darBajaPaciente, insertarPaciente, listarPaciente, obtenerPaciente } from '../controllers/paciente.controller';

const router: Router = Router();

router.post('/',insertarPaciente);
router.get('/',listarPaciente);
router.get('/:idPaciente',obtenerPaciente);
router.put('/:idPaciente',actualizarPaciente);
router.delete('/:idPaciente',darBajaPaciente);

export default router;