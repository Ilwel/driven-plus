import './SignUp.css'
import Button from '../components/Button';
import Container from '../components/Container';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='l-sign-up'>
      <Container
        inputs={
          [
            {
              type: 'text',
              placeholder: 'Nome'
            },
            {
              type: 'text',
              placeholder: 'CPF'
            },
            {
              type: 'email',
              placeholder: 'Email'
            },
            {
              type: 'password',
              placeholder: 'Senha'
            }
          ]
        }
      />
      <Button
        name='Cadastrar'
      />
      <p>Já possui conta? <Link to='/'> Entre</Link></p>
    </div>
  );
};

export default SignUp;