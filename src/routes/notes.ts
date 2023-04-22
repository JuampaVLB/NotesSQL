import { Router, Request, Response } from 'express';
import * as notesController from '../controllers/notes.controller';
const router = Router();

router.get('/', notesController.getNotes);

export default router;