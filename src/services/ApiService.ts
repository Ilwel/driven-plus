import { API_URL } from '../env'
import axios from 'axios'

export class ApiService{

  public static async signIn(email:string, password:string){
    const response = await axios.post(API_URL + '/api/v4/driven-plus/auth/login', {
      email,
      password
    })
    let { data } = response
    data = JSON.stringify(data)
    return data
  }

  public static async signUp(name:string, cpf:string, email:string, password:string){
    const response = await axios.post(API_URL + '/api/v4/driven-plus/auth/sign-up', {
      email, 
      name,
      cpf,
      password
    })
    let { data } = response
    data = JSON.stringify(data)
    return data
  }

  public static async listAllPlans(token:string){
    const response = await axios.get(API_URL + '/api/v4/driven-plus/subscriptions/memberships',{
      headers:{
        Authorization: 'Bearer ' + token
      }
    })
    const { data } = response
    return data
  }

  public static async getPlan(id:string, token:string){
    const response = await axios.get(API_URL + '/api/v4/driven-plus/subscriptions/memberships/' + id, {
      headers:{
        Authorization: 'Bearer ' + token
      }
    })
    const { data } = response
    return data
  }

  public static async postPlan(membershipId:number, cardName:string, cardNumber:string, securityNumber:number, expirationDate:string, token:string){
    const response = await axios.post(API_URL + '/api/v4/driven-plus/subscriptions', {
        membershipId,
        cardName,
        cardNumber,
        securityNumber,
        expirationDate
      },
      { 
        headers:{
          Authorization: 'Bearer ' + token
        }
      }
    )
    const { data } = response
    return data
  }

  public static async deletePlan(token: string){
    const response = await axios.delete(API_URL + '/api/v4/driven-plus/subscriptions', {
      headers:{
        Authorization: 'Bearer ' + token
      }
    })
    const { data } = response
    return data
  }
}