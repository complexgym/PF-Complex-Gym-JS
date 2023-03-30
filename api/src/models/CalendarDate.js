const { DataTypes } = require("sequelize");

const calendarDate = (sequelize) => {
    sequelize.define('calendardate', {

        id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: true,
			primaryKey: true,
		},
        day : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        month : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        year : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hour : {
            type: DataTypes.STRING,
            allowNull: false
        },
        description : {
            type: DataTypes.STRING,
            allowNull: false
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

module.exports = calendarDate