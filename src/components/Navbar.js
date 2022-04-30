import React from 'react'
import "./navbar.scss"
export const Navbar = () => {
  return (
    <header className='navbar__header'>
        <nav className='navbar__header-nav'>
            <ul className='navbar__header-nav-ul'>
                <li>Home</li>
                <li>Portfolio</li>
                <li>About me</li>
            </ul>
        </nav>
    </header>
  )
}
