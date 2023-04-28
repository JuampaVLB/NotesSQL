import {Request, Response } from 'express';
import { pool } from '../db';

export const getNotes = async (_req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM note');
        res.status(200).json({ message: "Successfully", result })
    } catch (error) {
        res.status(500).json({ message: "ERROR_GET_NOTES" });
    }
}

export const createNote = async (req: Request, res: Response) => {
    try {

        const id_note = 1;

        const { name_note, task_note, state_note } = req.body;

        const result = await pool.query(`INSERT INTO note (id_note , name_note, task_note, state_note) VALUES (${id_note}, ${name_note}, ${task_note}, ${state_note})`);
        res.status(200).json({ message: "Successfully", result: result })
    } catch (error) {
        res.status(500).json({ message: "ERROR_POST_NOTE" });
    }
}

export const updateNote = async (_req: Request, res: Response) => {
    // try {
    //     res.status(200).json({ message: "Successfully", result })
    // } catch (error) {
        // res.status(500).json({ message: "ERROR_GET_NOTES" });
    // }
}

export const deleteNote = async (_req: Request, res: Response) => {
    // try {
    //     res.status(200).json({ message: "Successfully", result })
    // } catch (error) {
        // res.status(500).json({ message: "ERROR_GET_NOTES" });
    // }
}