import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from './context'

const Sidebar = () => {
  const {isSidebarOpen, toggleSidebar}= useGlobalContext();
  return (
    <div className={isSidebarOpen? 'sidebar-wrapper show': 'sidebar-wrapper'}>
      <aside className="sidebar">
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes/>
        </button>
        <div className="sidebar-links">
          {sublinks.map((item)=>{
            const {page, links}= item;
            return(
              <article key={page}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index)=> {
                    const {label, icon, url}= link;
                    return(
                      <a href={url} key={index}>
                      {label}{icon}</a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
