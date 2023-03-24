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
        class : {
            type: DataTypes.STRING,
            allowNull: false
        }

    }, { timestamps: false })
}

module.exports = calendarDate