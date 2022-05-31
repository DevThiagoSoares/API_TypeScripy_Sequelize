import { sequelize } from "../database";
import { DataTypes, Model } from "sequelize";

interface RestaurantsInstance extends Model {
    id: number;
    name: string;
    phone: string;
    description: string;
    address: string;
};

export const Restaurants = sequelize.define<RestaurantsInstance>(
    'restaurants',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        address: {
            type: DataTypes.TEXT
        }
    }
);