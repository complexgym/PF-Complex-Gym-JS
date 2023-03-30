const { DataTypes } = require("sequelize");

const admin = (sequelize) => {
    sequelize.define('admin', {
        id: {
            type: DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull: true,
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

module.exports = admin