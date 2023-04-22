import express from 'express';
import { Request, Response } from 'express';
import "dotenv/config";
import cors from 'cors';
import { pool } from './db';
import noteRoutes from './routes/notes';
const PORT = process.env.PORT || 4001;
const app = express();
app.use(cors({
    origin: ['*']
}));

app.get('/', async (_req: Request, res: Response) => {
    const result = await pool.query('SELECT * FROM note');
    res.json(result);
});

app.use('/api/v1/notes', noteRoutes);
app.listen(PORT, () => {
    console.log("Server on PORT: " + PORT);
});

