import {  DataTypes, Model } from 'sequelize';
import dataBase from "../../db/connectionDB";

interface UserAttributes {
  email: string;
  password: string;
}

interface UserModel extends Model<UserAttributes>, UserAttributes {}


const Users = dataBase.define<UserModel>('Users', {
    // Model attributes are defined here
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING
      
    }
  }, {
schema: 'users'
  });

  export const createUsersTable = async () => {
    try {
      await Users.sync().then(() => {
        console.log('users created successfully');
      });
    } catch (error) {
      console.log('Unable to create: users');
      return Promise.reject(error);
    }
  };






  export default Users


  