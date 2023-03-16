const { DataTypes } = require("sequelize");

const trainer = (sequelize) => {
    sequelize.define('trainer', {
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
        },
        classes:  {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        phone: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {timestamps: false})
}

module.exports = trainer