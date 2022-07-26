import { IPerk } from "./IPerk";
import { IPlan } from "./IPlan";

export interface IPlanDetails extends IPlan{
  name:string,
  perks: Array<IPerk>
}