import React from 'react'
import './PlanCard.css'


export interface IPlanCardProps {
  id: number
  handle: Function
  srcImage: string
  price: string

}

const PlanCard = (props: IPlanCardProps) => {

  return (
    <div onClick={() => props.handle(props.id.toString())} className="c-plan-card">
      <img src={props.srcImage} alt="Plan" />
      <h1>{props.price}</h1>
    </div>
  );

};

export default PlanCard;