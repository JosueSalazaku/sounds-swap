import React from 'react'

function Header() {
  return (
      <header className='flex flex-row justify-evenly items-center bg-secondary py-4 border-b-2 border-'>
          <img src="/images/SoundSwap_logo_3.png" alt="logo" className='h-15 w-12'/>
          <ul className='flex flex-row space-x-7'>
          <li>Products</li>
              <li>Contact</li>
          </ul>
          <ul className='flex flex-row space-x-7'>
              <li>Sign In</li>
              <li>Sing Up</li>
          </ul>
    </header>
  )
}

export default Header