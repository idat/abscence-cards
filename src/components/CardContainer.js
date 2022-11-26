import React from 'react'
import Card from './Card'
import { absences } from '../data'
import Button from './Button'

export default function CardContainer() {
  const [cards, setCards] = React.useState([])
  const cardView = cards.map((item, index) => <Card item={item} key={index} />)

  function addRandomCard() {
    setCards(prevCards => [...prevCards, absences[Math.floor(Math.random() * absences.length)]])
  }

  return (
    <div>
      <h1 className='cardcontainer--headline'>Frånvaroanmälningar</h1>
      <div className='container'>
        {cardView}
        <Button handleClick={addRandomCard} />
      </div>
    </div>
  )
}
