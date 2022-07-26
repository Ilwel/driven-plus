import './Subscription.css'
import React, { useEffect, useState } from 'react';
import { IPlanDetails } from '../interfaces/IPlanDetails'
import { useNavigate, useParams } from 'react-router-dom';
import { ApiService } from '../services/ApiService';
import { UserService } from '../services/UserService';
import listLogo from '../assets/list.svg'
import priceLogo from '../assets/price.svg'
import Input from '../components/Input';
import Button from '../components/Button';
import ModalPlan from '../components/ModalPlan'

const Subscription = () => {
  const navigate = useNavigate()
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [validDate, setValidDate] = useState('')
  const [plan, setPlan] = useState({} as IPlanDetails)
  const [modal, setModal] = useState(false)
  const params = useParams()
  const { id } = params

  useEffect(() => {
    const fetchData = async () => {
      const user = UserService.getUser()
      if (id) {
        const data = await ApiService.getPlan(id, user.token)
        setPlan(data)
      }
    }
    fetchData()
  }, [id])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user = UserService.getUser()
    const { token } = user
    const data = await ApiService.postPlan(Number(id), cardName, cardNumber, Number(cvv), validDate, token)
    navigate('/')

  }

  const handleModal = () => { setModal(true) }

  return (
    <div className='l-sub'>
      <img src={plan.image} alt="" />
      <h1>{plan.name}</h1>
      <div className="profit">
        <img src={listLogo} alt="" />
        <p> Benefícios:</p>
      </div>
      {plan.perks?.map((perk, index) => (
        <p key={perk.id} >{index + 1}. {perk.title}</p>
      ))}
      <div className="profit">
        <img src={priceLogo} alt="" />
        <p> Preço:</p>
      </div>
      <p>R$ {plan.price} cobrados mensalmente</p>

      <form onSubmit={e => onSubmit(e)}>
        <Input
          type='text'
          placeholder='Nome impresso no cartão'
          set={setCardName}
        />
        <Input
          type='text'
          placeholder='Dígitos do cartão'
          set={setCardNumber}
        />
        <div className="last-inputs">
          <Input
            type='text'
            placeholder='CVV'
            set={setCvv}
          />
          <Input
            type='text'
            placeholder='Validade'
            set={setValidDate}
          />
        </div>
        <Button
          type='button'
          name='Assinar'
          onClick={handleModal}
        />
        <ModalPlan
          open={modal}
          set={setModal}
        />
      </form>
    </div>

  );
};

export default Subscription;