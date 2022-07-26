import { IPerk } from "./IPerk"

export interface IMemberShip{
  id:number
  name:string
  image:string
  piece:string
  perks:Array<IPerk>
}