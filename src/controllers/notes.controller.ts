import {Request, Response } from 'express';
import { pool } from '../db';

export const getNotes = (_req: Request, res: Response) => {
    try {

        pool.query('SELECT * FROM note', () => {

        })

        res.status(200).json({ message: "Successfully" })
    } catch (error) {
        res.status(500).json({ message: "ERROR_GET_NOTES" });
    }
}