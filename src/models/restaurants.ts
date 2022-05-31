import { sequelize } from "../database";
import { DataTypes, Model } from "sequelize";

interface RestaurantsInstance extends Model {
    id: number;
    name: string;
    phone: string;
    description: string;
    address: string;
};