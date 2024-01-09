import { compare, hash } from 'bcrypt';
import Users from '../../users/model/usersSchema';
import users from '../../users/model/usersSchema';
import { uoersType } from '../../users/types/uoersType';

export const userSignIn = async (user: uoersType) => {
  try {
    const existingUser = await Users.findOne({ where: { email: user.email } });
    if (existingUser) {
      console.error('Invalid creadentials');
      throw new Error('Invalid creadentials');
    }
    user.password = await hash(user.password, 10);
    const newUser = await users.create(user);
    
    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const userLogin = async ({ email, password }: uoersType) => {
  try {
    const user = await Users.findOne({ where: { email: email } });
    if (!user) {
      console.error('Invalid creadentials');
      throw new Error('Invalid creadentials');
    }
    const comper = await compare(password, user.password);
    if (!comper) throw new Error('Invalid password');
    return user
    
  } catch (error) {
    console.log(error);
    throw error;
  }
};
