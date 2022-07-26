import './SignIn.css'
import drivenLogo from '../assets/driven-logo.svg'
import Container from '../components/Container'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ApiService } from '../services/ApiService'


const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //handle
    e.preventDefault()
    let user = await ApiService.signIn(email, password)
    localStorage.setItem('user', user)
    user = JSON.parse(user)
    console.log(user)
    if (!user.membership) {
      navigate('/subscriptions')
    } else {
      navigate('/home')
    }
  }

  return (
    <form onSubmit={e => onSubmit(e)} className="l-sign-in">
      <img src={drivenLogo} alt="driven logo" />
      <Container
        inputs={
          [
            {
              type: 'email',
              placeholder: 'Email',
              set: setEmail
            },
            {
              type: 'password',
              placeholder: 'Senha',
              set: setPassword
            }
          ]
        }
      />
      <Button
        name="Entrar"
      />
      <p>Não possui conta? <Link to='/sign-up'> Cadastre-se</Link> </p>

    </form>
  );
};

export default SignIn;