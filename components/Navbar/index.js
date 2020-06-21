import { useState } from 'react'

const Navbar = ({ onLogout }) => {
  const handleLogout = (event) => {
    event.preventDefault()
    onLogout()
  }

  return (
    <>
        <div>
            NavBar
        </div>
    </>
  )
}

export default Navbar
