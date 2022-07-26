import { IUser } from '../interfaces/IUser'

export class UserService{

  public static getUser(): IUser{
    const user = localStorage.getItem('user') as string
    const userParse = JSON.parse(user) as IUser
    return userParse
  }

  public static setUser(user:IUser){
    const userJson = JSON.stringify(user)
    localStorage.setItem('user', userJson)
  }

}