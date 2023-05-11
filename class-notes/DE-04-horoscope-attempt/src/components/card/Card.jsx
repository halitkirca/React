import React from 'react'
import "./Card.scss"
import { Col, Container, Row } from 'react-bootstrap'

const Card = ({data}) => {
  
  return (<div>
  <div className='Roww' >
    {data.map(({id, title,date, desc, image}) => {
      return(
        <div className='kard' key={id}>
          <img id="backimage" src={image} alt=""/>
          <p id='title'>{title}</p>
          <p id='date'>{date}</p>
          <p id='desc'>{desc}</p>
        </div>
      );
    })
    } 
  </div>

  </div>
  )
}

export default Card