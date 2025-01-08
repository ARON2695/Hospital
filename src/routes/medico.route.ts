import {Router} from 'express';
import { actualizarMedico, listarMedicos, obtenerMedico, insertarMedico, darBajaMedico } from '../controllers/medico.controller';

const router: Router = Router();

router.post('/',insertarMedico);
router.get('/',listarMedicos);
router.get('/:idMedico',obtenerMedico);
router.put('/:idMedico',actualizarMedico);
router.delete('/:idMedico',darBajaMedico);

export default router;