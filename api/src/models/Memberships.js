const { DataTypes } = require("sequelize");

const memberships = (sequelize) => {
	sequelize.define(
		"memberships",
		{
			clientId: {
				type: DataTypes.UUID,
				allowNull: true,
				primaryKey: true,
			},
			planName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			activities: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			price: {
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
				type: DataTypes.INTEGER,
				allowNull: true,
			},
		},
		{ timestamps: false }
	);
};

module.exports = memberships;
