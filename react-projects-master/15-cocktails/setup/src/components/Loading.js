import React from 'react'
import { useGlobalContext } from '../context'
const Loading = () => {
  const {loading}= useGlobalContext();
  return (
    loading && (<div className="loader">
    </div>)
  )
}

export default Loading
