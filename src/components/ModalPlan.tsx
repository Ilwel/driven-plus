import React from 'react';
import Button from './Button';

export interface IPropsModalPlan {
  open: boolean
  set: Function
}

const ModalPlan = (props: IPropsModalPlan) => {
  const handleClose = () => props.set(false)
  if (props.open) {
    return (
      <div className='c-modal'>
        <div className='c-card'>
          <h1>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</h1>
          <div className="buttons">

            <Button
              type='button'
              name='Não'
              className='gray-color'
              onClick={handleClose}
            />
            <Button
              type='submit'
              name='Sim'
            />
          </div>
        </div>

      </div>
    );

  }
  return (
    <></>
  )
};

export default ModalPlan;