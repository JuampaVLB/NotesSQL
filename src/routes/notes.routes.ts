import { Router, Request, Response } from 'express';
import * as notesController from '../controllers/notes.controller';
const router = Router();

router
    .get('/', notesController.getNotes)
    .post('/', notesController.createNote)
    .patch('/', notesController.updateNote)
    .delete('/', notesController.deleteNote)

export default router;