import './Input.css'
import InputMask from 'react-input-mask'

export interface IPropsInput {
  type: string;
  placeholder: string;
}

const Input = (props: IPropsInput) => {
  if (props.placeholder === 'CPF') {
    return (
      <InputMask
        mask='999.999.999-99'
        {...props}
        className='c-input'
      />
    )
  }
  return (

    <input
      className="c-input"
      type={props.type}
      placeholder={props.placeholder}
    />

  );
};

export default Input;