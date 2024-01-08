import {Sequelize} from 'sequelize'
import 'dotenv/config'
const dataBase = new Sequelize(process.env.URL_LOCAL_POSTGRAS as string)


export const dbConection = async () => {
    try {
        await dataBase.authenticate();
        return'Connection has been successfully.🚀👌'
      } catch (error) {
        return Promise.reject(  error);
      }
}

export default dataBase