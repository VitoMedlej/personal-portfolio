"use client"
import React from 'react'

const MobileButtons = ({isLoaded} : {isLoaded: boolean}) => {
  return (

    <div className="mobile-buttons-container" style={{ display: isLoaded ? 'flex' : 'none' }}>
    <button id="w" className="mobile-button">W</button>
    <div className="horizontal-buttons">
      <button id="a" className="mobile-button">A</button>
      <button id="d" className="mobile-button">D</button>
    </div>
    <button id="s" className="mobile-button">S</button>
  </div>
  )
}

export default MobileButtons