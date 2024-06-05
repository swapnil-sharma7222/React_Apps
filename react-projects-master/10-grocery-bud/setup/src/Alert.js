import React, { useEffect } from 'react'

const Alert = ({alert, list}) => {
  useEffect(()=>{
    const timeout= setTimeout(()=> {
      
    }, 2000);
    return ()=> clearTimeout(timeout);
  }, [list])
  return (
    <p className={`alert alert-${alert.type}`}>{alert.msg}</p>
  )
  // return <h5>alert component</h5>
}

export default Alert
