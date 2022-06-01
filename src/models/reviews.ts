import { sequelize } from '../database'
import { DataTypes, Model } from 'sequelize'

interface ReviewsInstance extends Model {
    averageStarsGiven: number,
    stars: number,
    clientsId: number
}

const Reviews = sequelize.define<ReviewsInstance>('reviews', {
    clients_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clients',
            key: 'id'
        },
        onUpdate: 'CASCADE'
    },
    average_stars_given: {
        type: DataTypes.DECIMAL,
    },
    stars: {
        type: DataTypes.INTEGER,
    },
    
})

export { Reviews }
