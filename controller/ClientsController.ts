import { Request, Response } from "express";
import { Clients } from "../src/models";

export const clientsController = {
    index: async (req: Request, res: Response) => {
        try {
            const clients = await Clients.findAll();
            return res.json(clients)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    // POST /clients
    save: async (req: Request, res: Response) => {
        const { name, phone } = req.body;

        try {
            const clients = await Clients.create({
                name,
                phone
            });

            return res.status(201).json(clients)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    // GET /clients/:id
    show: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const clients = await Clients.findByPk(id);
            return res.json(clients)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    },

    // PUT /candidates/:id
    update: async (req: Request, res: Response) => {
        const { id, name, phone } = req.body;

        try {
            const clients = await Clients.findByPk(id);

            if (clients === null) {
                return res.status(404).json({ message: 'cliente não encontrado' });
            }

            clients.name = name;
            clients.phone = phone;

            await clients.save();
            return res.status(201).json(clients);
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
            await Clients.destroy({ where: { id } });

            return res.status(204).send;
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }
}