import './SignIn.css'
import drivenLogo from '../assets/driven-logo.svg'
import Container from '../components/Container'
import Button from '../components/Button'
import { Link } from 'react-router-dom'


const SignIn = () => {

  const handleClick = () => {
    //handle
  }

  return (
    <form className="l-sign-in">
      <img src={drivenLogo} alt="driven logo" />
      <Container
        inputs={
          [
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
        name="Entrar"
      />
      <p>Não possui conta? <Link to='/sign-up'> Cadastre-se</Link> </p>

    </form>
  );
};

export default SignIn;