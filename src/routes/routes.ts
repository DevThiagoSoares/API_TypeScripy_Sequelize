import express from 'express';
import { clientsController } from '../../controller/ClientsController';
import { RestaurantsController } from '../../controller/RestaurantsController';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ hello: 'hello, world!' });
});

// Routes Restaurants
router.get('/restaurants', RestaurantsController.index);
router.get('/restaurants/:id', RestaurantsController.show);
router.post('/restaurants', RestaurantsController.save);
router.put('/restaurants/:id', RestaurantsController.update);
router.delete('/restaurants/:id', RestaurantsController.delete);


// Routes Clients
router.get('/clients', clientsController.index);
router.get('/clients/:id', clientsController.show);
router.post('/clients', clientsController.save);
router.put('/clients/', clientsController.update);
router.delete('/clients/:id', clientsController.delete);

export { router };