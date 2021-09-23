import {Router} from 'express';
const router = Router();
import {crearProject } from '../controllers/project.controller';


// api/projects
router.post('/', crearProject );

export default router;