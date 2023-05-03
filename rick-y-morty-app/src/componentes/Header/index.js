import React from 'react'
import "./Header.css"


const Header = () => {
  return (
    <header className="navbar">
      <nav className="container">
          <a href='/'><img className="titulo" src="/titulo_rick_morty.png" alt="Titulo de rick y morty"></img></a>
      </nav>
    </header>
  )
}

export default Header


