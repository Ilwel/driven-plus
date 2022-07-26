import './SignUp.css'
import Button from '../components/Button';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ApiService } from '../services/ApiService';

const SignUp = () => {
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //handle
    e.preventDefault()
    const data = await ApiService.signUp(name, cpf, email, password)
  }

  return (
    <form onSubmit={e => onSubmit(e)} className='l-sign-up'>
      <Container
        inputs={
          [
            {
              type: 'text',
              placeholder: 'Nome',
              set: setName
            },
            {
              type: 'text',
              placeholder: 'CPF',
              set: setCpf
            },
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
        name='Cadastrar'
      />
      <p>Já possui conta? <Link to='/'> Entre</Link></p>
    </form>
  );
};

export default SignUp;