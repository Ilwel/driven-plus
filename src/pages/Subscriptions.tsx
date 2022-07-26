import React, { useEffect, useState } from 'react'
import './Subscriptions.css'
import PlanCard from '../components/PlanCard'
import { IPlan } from '../interfaces/IPlan'
import { useNavigate } from 'react-router-dom';
import { ApiService } from '../services/ApiService';
import { UserService } from '../services/UserService';

const Subscriptions = () => {
  const navigate = useNavigate()
  const [plans, setPlans] = useState([] as Array<IPlan>)

  useEffect(() => {

    const fetchData = async () => {
      const user = UserService.getUser()
      const data = await ApiService.listAllPlans(user.token)
      setPlans(data)
    }
    fetchData()
  }, [])

  const handleClick = (plan: string) => {
    navigate(plan)
  }

  return (
    <div className="l-subs">
      <h1>Escolha seu Plano</h1>
      {plans.map(plan => (
        <PlanCard
          key={plan.id}
          id={plan.id}
          handle={handleClick}
          srcImage={plan.image}
          price={plan.price}
        />
      ))}
    </div>
  );
};

export default Subscriptions;