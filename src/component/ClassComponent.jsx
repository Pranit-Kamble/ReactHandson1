import React from 'react'
import './ClassComponent.css'

const ClassComponent = () => {
  return (
    <div id="card1" className="card2">
    <h1>This is created using Class component</h1>
    <p>This is done using external CSS</p>
    <p style={{color:"blue"}}>This is done using inline CSS</p>
  </div>
  )
}

export default ClassComponent