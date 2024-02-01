import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='link-container'>
        <Link to="/">IU</Link>
      </div>
      <div className='link-container'>
        <Link to="/">Main</Link>
        <Link to="/list">List</Link>
      </div>
      <div className='link-container'>
        <Link to="/">Login</Link>
        <Link to="/">Join</Link>
      </div>
    </div>
  )
}

export default Header