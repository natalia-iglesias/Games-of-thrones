const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('character', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         lastname: {
            type: DataTypes.STRING,
            allowNull:false,
         },
         title: {
            type: DataTypes.STRING,
            allowNull:false
         },
         family: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         
         
         image: {
            type: DataTypes.STRING,
            allowNull: false,
         },
         createdInDb: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:true,
         },
    })
}