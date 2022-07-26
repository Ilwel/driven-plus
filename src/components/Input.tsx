import './Input.css'
import InputMask from 'react-input-mask'

export interface IPropsInput {
  type: string;
  placeholder: string;
  set: React.Dispatch<React.SetStateAction<string>>
}

const Input = (props: IPropsInput) => {
  if (props.placeholder === 'CPF') {
    return (
      <InputMask
        mask='999.999.999-99'
        {...props}
        className='c-input'
        onChange={(e) => props.set(e.target.value)}
      />
    )
  } else if (props.placeholder === 'Dígitos do cartão') {
    return (
      <InputMask
        mask='9999 9999 9999 9999'
        {...props}
        className='c-input'
        onChange={(e) => props.set(e.target.value)}
      />
    )
  } else if (props.placeholder === 'CVV') {
    return (
      <InputMask
        mask='999'
        {...props}
        className='c-input'
        onChange={(e) => props.set(e.target.value)}
      />
    )
  } else if (props.placeholder === 'Validade') {
    return (
      <InputMask
        mask='99/99'
        {...props}
        className='c-input'
        onChange={(e) => props.set(e.target.value)}
      />
    )
  }
  return (

    <input
      className="c-input"
      type={props.type}
      placeholder={props.placeholder}
      onChange={(e) => props.set(e.target.value)}
    />

  );
};

export default Input;