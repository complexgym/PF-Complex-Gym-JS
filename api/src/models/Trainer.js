const { DataTypes } = require("sequelize");

const trainer = (sequelize) => {
    sequelize.define('trainer', {
        id: {
            type: DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
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
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        permits: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        classes:  {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        phone: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        mail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        paranoid: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
			},
    })
}

module.exports = trainer