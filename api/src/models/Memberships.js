import { DataTypes } from "sequelize";

const memberships = (sequelize) => {
    sequelize.define('memberships', {   
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
     }, {timestamps: false})
}

module.exports = memberships