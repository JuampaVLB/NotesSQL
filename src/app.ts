import express from 'express';
import "dotenv/config";
import cors from 'cors';

const PORT = process.env.PORT || 4001;
const app = express();
app.use(cors({
    origin: ['*']
}));

app.listen(PORT, () => {
    console.log("Server on PORT: " + PORT);
});

