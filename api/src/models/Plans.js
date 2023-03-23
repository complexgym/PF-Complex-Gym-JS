const { DataTypes } = require("sequelize");

const payments = (sequelize) => {
    sequelize.define('plans', {   
        id:{
            type: DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
			allowNull: true,
            primaryKey: true,
            unique: true,
        },
        name: { 
			type: DataTypes.STRING,
			allowNull: false,
		},
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING),
			allowNull: true,
        },
        price: {
            type: DataTypes.INTEGER,
			allowNull: true,
        },
     }, {timestamps: false})
}

module.exports = payments