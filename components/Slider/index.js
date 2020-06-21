import { useState } from 'react'

const Slider = ({ onLogout }) => {
  const handleLogout = (event) => {
    event.preventDefault()
    onLogout()
  }

  return (
    <>
        <div>
            crousal
        </div>
    </>
  )
}

export default Slider
