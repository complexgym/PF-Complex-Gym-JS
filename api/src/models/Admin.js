import { DataTypes } from "sequelize";

const admin = (sequelize) => {
    sequelize.define('admin', {
        id: {
            type: DataTypes.UUID,
            defaultValue:DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        permits: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        }
    }, {timestamps: false})
}

module.exports = admin