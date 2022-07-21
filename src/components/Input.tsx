import './Input.css'

export interface IPropsInput {
  type: string;
  placeholder: string;
}

const Input = (props: IPropsInput) => {
  return (

    <input
      className="c-input"
      type={props.type}
      placeholder={props.placeholder}
    />

  );
};

export default Input;