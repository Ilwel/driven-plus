import {IMemberShip} from './IMemberShip'

export interface IUser{
  id:number
  name:string
  cpf:string
  email:string
  password:string
  membership:IMemberShip
  token:string
}