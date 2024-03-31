import React, {useState} from 'react'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
  <header className='d-flex flex-wrap py-4'>
    <div className='d-flex px-5 py-3 justify-content-between responsive-menu'>
      <a href="/" className="logo navbar-brand">Blog <span className='text-primary-emphasis'>IFPB</span></a>
      <button className='menu-button btn-icon fs-1' onClick={() => {setMenu(!menu)}}>
        <FiMenu />
      </button>
    </div>
    <nav className={"navbar navbar-expand-lg navbar-light bg-none pb-4 px-5 justify-content-between gap-5 " + (menu && "menu-open")}>
      <ul className="navbar-nav gap-5">
        <li className="nav-item active">
          
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
          <input type="text" name='busca' className='nav-bar-input' placeholder='Buscar Assunto...'/>
          <button className="btn button-outline" type="submit">Buscar</button>
        </form>
        <a href="/login" className='nav-link'>Login</a>
      </div>
    </nav>
  </header>
  )
}

export default Navbar 