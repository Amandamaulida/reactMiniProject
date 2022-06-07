import React from 'react'
import { Figure } from "react-bootstrap"

const FigureComponent = (props) => {
  console.log(props);
  return (
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={props.dataProducts.image}
      />
      <Figure.Caption>
        <h5>{props.dataProducts.name}</h5>
       </Figure.Caption>
    </Figure>
    
  )
}

export default FigureComponent