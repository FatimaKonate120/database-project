'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
 class User extends Model {
   /**
    * Helper method for defining associations.
    * This method is not a part of Sequelize lifecycle.
    * The `models/index` file will call this method automatically.
    */
   static associate(models) {
    
    User.hasMany(models.Loan, { foreignKey: 'user_id' });
   }
 }


 User.init({
   id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true
   },
   name: {
     type: DataTypes.STRING(100),
     allowNull: false
   },
   contact_type: {
     type: DataTypes.STRING(100),
     allowNull: false
   },
   email: {
     type: DataTypes.STRING(100),
     allowNull: false,
     validate: {
       isEmail: true  // Validates that the email format is correct
     }
   },
   user_id: {
     type: DataTypes.INTEGER,
     allowNull: true,
     unique: true  // Makes sure that user_id is unique if it is provided
   }
 }, {
   sequelize,
   modelName: 'User',
   tableName: 'users', // explicitly set the table name to be plural
   timestamps: true // Automatically manage createdAt and updatedAt fields
 });


 return User;
};

