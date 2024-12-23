import {Router} from 'express';
import { listarCitas, obtenerCita, insertarCita, darBajaCita, modificarCita } from '../controllers/citas.controller';

const router: Router = Router();

router.post('/',insertarCita);
router.get('/',listarCitas);
router.get('/:idCita',obtenerCita);
router.put('/:idCita',modificarCita);
router.delete('/:idCita',darBajaCita);

export default router;