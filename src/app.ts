import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { router } from "./routes/routes";

const app = express();

app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Started');
});