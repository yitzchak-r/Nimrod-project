import { DataTypes } from "sequelize";
import dataBase from "../../db/connectionDB";

const Users = dataBase.define('Users', {
    // Model attributes are defined here
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING
      
    }
  }, {
schema: 'users'
  });

  export default Users


  