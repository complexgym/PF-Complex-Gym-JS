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
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        days: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        schedule: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        trainerId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
          },

    }, {
        paranoid: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
			}
    })
}

module.exports = activities