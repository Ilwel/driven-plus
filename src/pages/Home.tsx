import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userLogo from '../assets/user.svg';
import Button from '../components/Button';
import { IPlanDetails } from '../interfaces/IPlanDetails';
import { IUser } from '../interfaces/IUser'
import { ApiService } from '../services/ApiService';
import { UserService } from '../services/UserService'
import './Home.css'

export interface IHomeProps {
  plan: string;
}

const Home = (props: IHomeProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState({} as IUser)
  const [plan, setPlan] = useState({} as IPlanDetails)
  useEffect(() => {
    const fetchData = async () => {
      const user = UserService.getUser()
      const data = await ApiService.getPlan(
        user.membership.id.toString(),
        user.token)
      setPlan(data)
      setUser(user)
    }
    fetchData()
  }, [])

  const handleDelete = async () => {
    const data = await ApiService.deletePlan(user.token)
    navigate('/subscriptions')
  }

  return (
    <div className='l-home'>
      <img src={userLogo} alt="user logo" className='user-logo' />
      <img src={plan.image} alt="Plan" className='plan-logo' />
      <h2>Olá, {user.name}</h2>
      <div className="perks">
        {plan.perks?.map(perk => (
          <a href={perk.link}>
            <Button
              key={perk.id}
              name={perk.title}
            />
          </a>
        ))}

      </div>
      <div className='bottom-buttons'>
        <Button
          name='Mudar plano'
        />
        <Button
          name='Cancelar plano'
          className='red-color'
          onClick={handleDelete}
        />
      </div >
    </div >
  );
};

export default Home;