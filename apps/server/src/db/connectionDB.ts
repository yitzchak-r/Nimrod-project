import {Sequelize} from 'sequelize'
import 'dotenv/config'
const dataBase = new Sequelize(process.env.URL_LOCAL_POSTGRAS as string, {schema: 'users'})


export const dbConection = async () => {
    try {
        await dataBase.authenticate();
        return'Connection has been successfully.🚀👌'
      } catch (error) {
        return (  error);
      }
}

export default dataBase