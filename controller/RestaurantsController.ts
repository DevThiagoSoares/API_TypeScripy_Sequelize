import { Request, Response } from 'express';
import { Restaurants } from '../src/models';

export const RestaurantsController = {

    // GET /candidates
    index: async (req: Request, res: Response) => {
        try {
            const restaurants = await Restaurants.findAll();
            return res.json(restaurants);

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    // POST /candidates
    save: async (req: Request, res: Response) => {
        const { name, phone, description, address } = req.body;

        try {
            const restaurants = await Restaurants.create({
                name,
                phone,
                description,
                address
            });

            return res.status(201).json(restaurants)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    // GET /candidates/:id
    show: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const restaurants = await Restaurants.findByPk(id);
            return res.json(restaurants)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    // PUT /candidates/:id
    update: async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name, phone, description, address } = req.body;

        try {
            const restaurants = await Restaurants.findByPk(id);

            if (restaurants === null) {
                return res.status(404).json({ message: 'restaurante não encontrado' });
            }

            restaurants.name = name;
            restaurants.phone = phone;
            restaurants.description = description;
            restaurants.address = address;

            await restaurants.save();
            return res.status(201).json(restaurants);
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    //DELETE /candidates/:id
    delete: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            await Restaurants.destroy({ where: { id } });

            return res.status(204).send;
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }
}
