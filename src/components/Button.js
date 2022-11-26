import React from 'react'

export default function Button (props) {
  return (
    <div className='card' onClick={props.handleClick}>
      <h1 className='button'>+</h1>
    </div>
  )
}
