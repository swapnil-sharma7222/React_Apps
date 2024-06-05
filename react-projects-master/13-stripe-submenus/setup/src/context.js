import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  }
  const openSubmenu= (currPage)=> {
    const curr= sublinks.filter((item)=> item.page=== currPage);
    console.log(curr);
    return curr;
  }
  const [currHover, setCurrHover]= useState('');
  const changeCurrHover= (currPage)=> {
    setCurrHover(currPage);
    // return openSubmenu(currPage);
  }
  const [location, setLocation]= useState({});
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        openSubmenu,
        changeCurrHover,
        currHover,
        setCurrHover,
        setLocation,
        location
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext);
}

export { useGlobalContext, AppContext, AppProvider };