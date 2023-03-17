const { DataTypes } = require("sequelize");

const publication = (sequelize) => {
    sequelize.define('blog', {   
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        tag: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            default: ["fitness"]
        }
     })
}

module.exports = publication

