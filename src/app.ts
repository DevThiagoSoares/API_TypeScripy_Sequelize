import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
const router = express.Router();

router.get('/', (req, res) => {res.json({hello: 'hello, world!'})});

app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Started');
});