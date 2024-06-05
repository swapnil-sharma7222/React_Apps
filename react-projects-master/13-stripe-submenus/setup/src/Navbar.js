import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { toggleSidebar, openSubmenu, changeCurrHover, setCurrHover, setLocation } = useGlobalContext();
  const displaySubmenu= (e)=> {
    console.log(e.target.textContent);
    // openSubmenu(e.target.textContent);
    const tempBtn= e.target.getBoundingClientRect();
    const center= (tempBtn.left+ tempBtn.right)/ 2;
    const bottom= tempBtn.bottom- 3;
    setLocation({center, bottom});
    changeCurrHover(e.target.textContent);
  }
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="Logo"/>
          <button className='btn toggle-btn' onClick={toggleSidebar}>
            <FaBars/>
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button onMouseEnter={displaySubmenu} onMouseLeave={()=> setCurrHover('')}  className='link-btn'>
              products
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} onMouseLeave={()=> setCurrHover('')}  className='link-btn'>
              developers
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} onMouseLeave={()=> setCurrHover('')} className='link-btn'>
              company
            </button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}
export default Navbar