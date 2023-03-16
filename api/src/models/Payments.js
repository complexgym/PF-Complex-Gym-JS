const { DataTypes } = require("sequelize");

const payments = (sequelize) => {
    sequelize.define('payments', {   
        
     }, {timestamps: false})
}

module.exports = payments