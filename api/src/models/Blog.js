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
        isInstagram: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
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

module.exports = publication

