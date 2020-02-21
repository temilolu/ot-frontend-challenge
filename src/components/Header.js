import React from 'react'

const Header = ({ name }) => {
  return (
    <nav className='navbar navbar-dark bg-primary'>
      <h1 className='navbar-brand'> {name} </h1>
    </nav>
  )
}

export default Header
