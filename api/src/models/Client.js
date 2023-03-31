const { DataTypes } = require('sequelize');

const clients = (sequelize) => {
	sequelize.define(
		'client',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				allowNull: true,
				primaryKey: true,
			},
			user: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			dni: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			picture: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			height: {
				type: DataTypes.FLOAT,
				allowNull: true,
			},
			weight: {
				type: DataTypes.FLOAT,
				allowNull: true,
			},
			age: {
				type: DataTypes.INTEGER,
				allowNull: true,
			},
			phone: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			mail: {
				type: DataTypes.STRING,
				unique: true,
				allowNull: false,
			},
			address: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			city: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			region: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			postalCode: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			active: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			debt: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			debtAmount: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			routine: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			about: {
				type: DataTypes.TEXT,
				allowNull: true,
			},
			deletedAt: {
				type: DataTypes.DATE,
				allowNull: true,
			},
			admin: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: true,
			},
		},
		{
			paranoid: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
			},
		}
	);
};

module.exports = clients;
