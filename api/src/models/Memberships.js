const { DataTypes } = require("sequelize");

const memberships = (sequelize) => {
    sequelize.define('memberships', {   
        clientid:{
            type: DataTypes.UUID,
			allowNull: true,
        },
        planName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        actividadId: {
            type: DataTypes.UUID,
			allowNull: true,
        },
        Price: {
            type: DataTypes.INTEGER,
			allowNull: true,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        finishDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        paymentId: {
            type: DataTypes.UUID,
			allowNull: true,
        },
     }, {timestamps: false})
}

module.exports = memberships