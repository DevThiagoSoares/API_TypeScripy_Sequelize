import { Request, Response } from 'express';
import { Reviews } from '../src/models';

export const ReviewsController = {

    // GET /reviews
    index: async (req: Request, res: Response) => {
        try {
            const reviews = await Reviews.findAll({include: 'clients' });
            return res.json(reviews);

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }
}