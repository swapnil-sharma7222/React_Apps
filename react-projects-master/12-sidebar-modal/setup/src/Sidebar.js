import React, { useContext } from 'react'
import logo from './logo.svg'
import { AppContext } from './context';
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

const Sidebar = () => {
  const {isSidebarOpen, openSidebar}= useContext(AppContext);
  return (
    <div className={isSidebarOpen? 'sidebar show-sidebar': 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className='logo' />
        <button className='close-btn' onClick={openSidebar}><FaTimes /></button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (<li key={id}><a href={url}>{text}{icon}</a></li>)
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Sidebar