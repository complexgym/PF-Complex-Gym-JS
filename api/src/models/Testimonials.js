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
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
     })
}

module.exports = testimonials