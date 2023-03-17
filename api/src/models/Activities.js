const { DataTypes } = require("sequelize");

const activities = (sequelize) => {
    sequelize.define('activities', {   

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        days: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        schedule: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        trainerId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }

     }, {timestamps: false})
}

module.exports = activities