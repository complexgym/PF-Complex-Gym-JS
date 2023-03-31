const { DataTypes } = require("sequelize");

const paymentsincash = (sequelize) => {
    sequelize.define('paymentsincash', {   
        clientId:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: true,
        },
        paymentsId: { 
			type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,
            unique:true,
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
     }, {timestamps: false})
}

module.exports = paymentsincash
