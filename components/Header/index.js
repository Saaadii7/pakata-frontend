import { useState } from 'react'

import LanguageSelect from '../LanguageSelect'

const Header = ({ onLogout }) => {
  const handleLogout = (event) => {
    event.preventDefault()
    onLogout()
  }

  return (
    <div className='w-full flex justify-end items-center bg-white px-6 py-4'>
      <div className='flex items-center'>
        <LanguageSelect />
        <a onClick={handleLogout} className='mr-2 filter-invert-50 hover:filter-none'>
          <img src='/icons/logout.png' className='h-5' />
        </a>
      </div>
    </div>
  )
}

export default Header
