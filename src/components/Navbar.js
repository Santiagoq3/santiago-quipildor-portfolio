import React from 'react'
import "./navbar.scss"
export const Navbar = () => {
  return (
    <header className='navbar__header'>
        <nav className='navbar__header-nav'>
            <ul className='navbar__header-nav-ul'>
                <li>Home</li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#aboutme'>About me</a></li>
            </ul>
        </nav>
    </header>
  )
}
