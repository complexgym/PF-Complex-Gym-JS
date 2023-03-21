const { DataTypes } = require("sequelize");

const publication = (sequelize) => {
    sequelize.define('blog', {   
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
        },
        author_name: {
            type: DataTypes.TEXT,
            // allowNull: false
        },
        author_image: {
            type: DataTypes.TEXT,
            // allowNull: false
        }
     })
}

module.exports = publication

