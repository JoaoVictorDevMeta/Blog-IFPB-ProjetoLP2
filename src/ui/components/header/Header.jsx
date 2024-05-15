import React, {useState, useEffect} from 'react'
import { FiMenu } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../../data/reducers/auth/authSlice';
import { validateToken } from '../../../data/reducers/auth/authApiSlice';

import axios from 'axios';

import Button from '../buttons/Button';

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [popover, setPopover] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const user = useSelector(state => state.auth.user)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      console.log('test')
      await axios.post('/api/auth/logout');
      dispatch(logOut());
      navigate('/')
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`); // Navigate to the search page with the search term as a query parameter
  };

  useEffect(() => {
    dispatch(validateToken());
  }, [dispatch,  user]);

  return (
  <header className='d-flex flex-wrap py-4'>
    <div className='d-flex px-5 py-3 justify-content-between responsive-menu'>
      <Link to="/" className="logo navbar-brand">Blog <span className='text-primary-emphasis'>IFPB</span></Link>
      <Button type='icon' className='menu-button fs-1' handleClick={() => {setMenu(!menu)}}>
        <FiMenu />
      </Button>
    </div>
    <nav className={"navbar navbar-expand-lg navbar-light bg-none pb-4 px-5 justify-content-between gap-5 " + (menu && "menu-open")}>
      <ul className="navbar-nav gap-5">
        <li className="nav-item active">
          <Link to="/" className='nav-link'>Inicio</Link>
        </li>
        <li className="nav-item active">
          <Link to="/students" className='nav-link'>Alunos</Link>
        </li>
      </ul>
      <form action="/search" role="search" className='d-flex flex-wrap gap-5' onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          name='busca' 
          className='nav-bar-input' 
          placeholder='Buscar Assunto...'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="outline">
          Buscar
        </Button>
      </form>
      { user ? (
        <div>
          <Link className="profile-img position-relative">
            <img src={ user.imageUrl || "https://th.bing.com/th/id/OIP.6UhgwprABi3-dz8Qs85FvwHaHa?rs=1&pid=ImgDetMain"} alt={"UserImage." + user.name} onClick={()=>{setPopover(!popover)}}/>
          </Link>
          <div className={'popover position-absolute '+ (popover ? '' : 'd-none')}>
            <div className='popover-content p-4'>
              <Link to="/profile/1" className='nav-link mb-4'>Perfil</Link>
              <Button type='outline' handleClick={handleLogout}>
                LogOut
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Link to="/login" className='nav-link text-center'>Login</Link>
      )}
    </nav>
  </header>
  )
}

export default Navbar 