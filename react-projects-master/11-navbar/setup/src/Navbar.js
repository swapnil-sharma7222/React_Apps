import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef= useRef(null);
  const linksRef= useRef(null);

  useEffect(()=> {
    if(showLinks){
      linksContainerRef.current.style.height= `${linksRef.current.getBoundingClientRect().height}px`;
    }
    else{
      linksContainerRef.current.style.height= '0px';
    }
  }, [showLinks]);
  return (
    <section className="section">
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src={logo} className='logo' alt='logo' />
            <button className='nav-toggle' onClick={() => {setShowLinks(!showLinks)
            console.log(showLinks)}}>
              <FaBars />
            </button>
          </div>

          <div className= 'links-container' ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <><li key={id}><a href={url}>{text}</a></li><li key={11}><a href='#'>hello</a></li></>
                );
              })}
            </ul>
          </div>

          <ul className="social-icons">
            {social.map((link) => {
              const { id, url, icon } = link;
              return (
                <li key={id}><a href={url}>{icon}</a></li>
              )
            })}
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navbar
