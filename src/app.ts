import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { Restaurants } from './models/restaurants';

const app = express();
const router = express.Router();

router.get('/', (req, res) => {res.json({hello: 'hello, world!'})});
router.get('/restaurants',async (req, res) => {
    const restaurants = await Restaurants.findAll();
    return res.json(restaurants);
})

app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Started');
});