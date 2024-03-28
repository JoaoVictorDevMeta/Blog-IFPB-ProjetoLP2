import React from 'react'

const Navbar = () => {
  return (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-none p-4 px-5 justify-content-between gap-5">
      <ul className="navbar-nav gap-5">
        <li className="nav-item active">
          <a href="/" className="logo navbar-brand">Blog <span className='text-primary-emphasis'>IFPB</span></a>
        </li>
        <li className="nav-item active">
          <a href="/" className='nav-link'>Inicio</a>
        </li>
        <li className="nav-item active">
          <a href="/students" className='nav-link'>Alunos</a>
        </li>
      </ul>
      <div className='navbar-nav pe-5 d-flex align-center gap-4'>
        <form action="/search" role="search" className='d-flex flex-wrap gap-5'>
          <input type="text" className='nav-bar-input' placeholder='Buscar Assunto...'/>
          <button className="btn button-outline" type="submit">Buscar</button>
        </form>
        <a href="/login" className='nav-link'>Login</a>
      </div>
    </nav>
  </header>
  )
}

export default Navbar 