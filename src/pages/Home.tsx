import userLogo from '../assets/user.svg';
import Button from '../components/Button';
import './Home.css'

export interface IHomeProps {
  plan: string;
  name: string;
}

const Home = (props: IHomeProps) => {
  return (
    <div className='l-home'>
      <img src={userLogo} alt="user logo" className='user-logo' />

      <h2>Olá, {props.name}</h2>
      <div className='bottom-buttons'>
        <Button
          name='Mudar plano'
        />
        <Button
          name='Cancelar plano'
          className='red-color'
        />
      </div >
    </div >
  );
};

export default Home;