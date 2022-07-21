import './Container.css'
import Input, { IPropsInput } from './Input';

interface IPropsContainer {

  inputs: IPropsInput[];

}

const Container = (props: IPropsContainer) => {
  return (
    <div className='c-container'>
      {props.inputs.map(input => (
        <Input
          type={input.type}
          placeholder={input.placeholder}
        />
      ))}
    </div>
  );
};

export default Container;