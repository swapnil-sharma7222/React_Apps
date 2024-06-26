import React, { useState } from 'react'
import SingleColor from './SingleColor'
import './app.css'
import Values from 'values.js'

function App() {
  const [color, setColor]= useState('');
  const [list, setList]= useState([]);
  const [error, setError]= useState(false);
  const handleSubmit= (e)=> {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className='container'>
        <h2>Color Generator</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value= {color} onChange={(e)=> setColor(e.target.value)} placeholder='#f15025' className={`${error? 'error': null}`}/>
          <button className='btn' type='submit'>Generate</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index)=> {
          return <SingleColor key={index} {...color} index= {index}/>
        })}
      </section>
    </>
  )
}

export default App;