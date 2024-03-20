import { blogs } from './db.json'
import { useState, useEffect } from 'react'
import BlogResult from '../../ui/components/BlogResult'
import './Search.css'

const Search = () => {
  const [filter, setFilter] = useState("")



  return (
    <div>
      <div className='container-xxl search-container mb-5 py-4 px-5 mt-5'>
        <form className='d-flex flex-wrap gap-5 pe-5'>
          <input type="text" className='search-input nav-bar-input' />
          <button className='btn btn-white button-outline fs-4'>Buscar</button>
        </form>
        <p className='fs-5 '>Buscando Resultados para: <span></span></p>
      </div>

      <section className='result-container container-xxl bg-white p-5 mb-5'>
        <div className='items-container'>
          {blogs.map((data, i) => {
            return <BlogResult key={i} title={data.title} description={data.description} image={data.image} category={data.category}/>
          })}
        </div>
        <div className='filter-container'>
        </div>
      </section>
    </div>
  )
}

export default Search