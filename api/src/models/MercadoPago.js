const { DataTypes } = require("sequelize");

const mercadopago = (sequelize) => {
    sequelize.define('mercadopago', {   
        clientId:{
            type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: true,
            primaryKey: true,
        },
        paymentsId: { 
			type: DataTypes.INTEGER,
			allowNull: false,
		},
        paymentsStatus: {
            type: DataTypes.STRING,
			allowNull: true,
        },
        paymentsDate: {
            type: DataTypes.STRING,
			allowNull: true,
        },
        paymentsAmount: {
            type: DataTypes.INTEGER,
			allowNull: true,
        },
        plansPayments: {
            type: DataTypes.STRING,
			allowNull: true,
        },
        order: {
            type: DataTypes.STRING,
			allowNull: true,
        },
     }, {timestamps: false})
}

module.exports = mercadopago