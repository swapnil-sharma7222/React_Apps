import React, { useState, useRef, useEffect } from 'react'
import  sublinks  from "./data";
import { useGlobalContext } from './context';
const Submenu = () => {
  const {openSubmenu, currHover, location}= useGlobalContext();
  const abc= openSubmenu(currHover);
  const container= useRef(null);
  useEffect(()=> {
    const submenu= container.current;
    const {center, bottom}= location;
    submenu.style.left= `${center}px`;
    submenu.style.top= `${bottom}px`;
  }, [currHover]);
  return (
    <aside className= {currHover? 'submenu show': 'submenu'} ref={container}>
      {abc.map((item)=>{
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
    </aside>
  )
}

export default Submenu
