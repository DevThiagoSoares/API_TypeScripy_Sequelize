import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";


interface ClientsInstace extends Model {
    id: number;
    name: string;
    phone: string
}

export const Clients = sequelize.define<ClientsInstace>(
    'clients', {
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
    }
}
);