import { useState } from 'react'

import LanguageSelect from '../LanguageSelect'

const Header = ({ onLogout }) => {
  const handleLogout = (event) => {
    event.preventDefault()
    onLogout()
  }

  return (
    <div className='w-full flex justify-end' style={{height: "100px", background: "#fcb800"}}>
        <nav class="w-full flex items-center justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">Pakata</span>
            </div>
            <div>
                <div className='flex items-center bold'>
                    <a onClick={handleLogout} className='mr-2 filter-invert-50 hover:filter-none cursor-pointer'>
                        LogOut
                    </a>
                </div>          
            </div>
        </nav>
    </div>
  )
}

export default Header
