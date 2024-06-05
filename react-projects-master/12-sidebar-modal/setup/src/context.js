import React, { useState, useContext, createContext } from 'react'

const AppContext= createContext("");

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const openModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    return (
      <AppContext.Provider value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        openModal,
      }}>
        {children}
      </AppContext.Provider>
    );
};
  

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };