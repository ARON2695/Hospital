import {Router} from 'express';
import { listarCitas, obtenerCita, insertarCita, darBajaCita, actualizarCita } from '../controllers/cita.controller';

const router: Router = Router();

router.post('/',insertarCita);
router.get('/',listarCitas);
router.get('/:idCita',obtenerCita);
router.put('/:idCita',actualizarCita);
router.delete('/:idCita',darBajaCita);

export default router;