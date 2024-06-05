import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {searchTerm, setSearchTerm}= useGlobalContext();
  const handleSubmit= (e)=> {
    e.preventDefault();
  }
  const searchCocktail= (e)=> {
    setSearchTerm(e.target.value)
  }
  return (
    <section className="section search">
      <div className="search-form">
        <form className='form-control' onSubmit={handleSubmit}>
          <label htmlFor="">Search your favorite Cocktail</label>
          <input 
            type="text"
            name='name'
            id='name'
            value={searchTerm}
            onChange={searchCocktail}
            autoFocus/>
        </form>
      </div>
    </section>
  )
}

export default SearchForm
