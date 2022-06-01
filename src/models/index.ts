// src/models/index.ts

import { Clients } from './clients'
import { Restaurants } from './restaurants'
import { Reviews} from './reviews'

Clients.hasMany(Reviews)
Reviews.belongsTo(Clients)

export {
    Restaurants,
    Clients,
    Reviews
}
