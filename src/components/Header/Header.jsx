import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <header className='header'>
        <Link to='/' style={{textDecoration:'none', color:'#ffff'}}>
            <h1>Dazzle Shop</h1>
        </Link>
 
         <Link to='/logout'>
            <button className='logout-button'>Logout</button>
         </Link>
        
      </header>
    </div>
  )
}

export default Header
