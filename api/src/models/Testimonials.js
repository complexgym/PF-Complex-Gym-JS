const { DataTypes } = require("sequelize");

const testimonials = (sequelize) => {
    sequelize.define('testimonials', {   
        id: {
            type: DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull: true,
            primaryKey: true,
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        review: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        fav: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        rate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
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

module.exports = testimonials