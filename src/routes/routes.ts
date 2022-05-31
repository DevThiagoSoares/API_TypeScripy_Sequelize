import  express from "express";
import { Restaurants } from '../models/restaurants';


export const router = express.Router();

router.get('/', (req, res) => { res.json({ hello: 'hello, world!' }) });
router.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurants.findAll();
    return res.json(restaurants);
})