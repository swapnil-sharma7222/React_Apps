import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert]= useState(false);
  useEffect(()=> {
    const timer= setTimeout(()=> {
      setAlert(false);
    }, 3000);
  }, [alert])
  let boxColor= rgbToHex(rgb[0], rgb[1], rgb[2]);
  return (
    <>
      <article className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: boxColor, display: 'flex', flexDirection: 'column', cursor: 'pointer'}} onClick={()=> {
        setAlert(true);
        navigator.clipboard.writeText(boxColor)
      }}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{boxColor}</p>
      {alert && <p className='alert'>{boxColor} is copied to clipboard.</p>}
      </article>
    </>
  )
};
export default SingleColor
