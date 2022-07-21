import React from 'react';
import './Button.css'

export interface IButtonProps {
  name: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string;
}
const Button = (props: IButtonProps) => {
  return (
    <button
      type='submit'
      onClick={props.onClick}
      className={`c-button ${props.className}`}>
      {props.name}
    </button>
  );
};

export default Button;