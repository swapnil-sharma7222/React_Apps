import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  const [page, setPage] = useState(1);
  const { loading, data } = useFetch(page);
  const postPerPage = 12;
  const numberOfPages = Math.ceil(data.length / postPerPage);

  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > numberOfPages) {
        nextPage = 1
      }
      return nextPage
    })
  }

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage <= 0) {
        prevPage = numberOfPages
      }
      return prevPage
    })
  }

  const handlePage = (index) => {
    setPage((oldPage) => {
      return index;
    });
  }

  const pageNumbers = [];

  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'Loading....' : 'Pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {currentPosts.map((profile) => {
            return <Follower key={profile.id} {...profile} />
          })}
        </div>
        <div className="btn-container">
          <button className='prev-btn' onClick={prevPage}>prev</button>
          {pageNumbers.map((number) => (
            (<button className={`page-btn ${number === page ? 'active-btn' : null}`} onClick={() => handlePage(number)} key={number}>{number}</button>)
          ))}
          <button className='next-btn' onClick={nextPage}>next</button>
        </div>
      </section>
    </main>
  )
}

export default App