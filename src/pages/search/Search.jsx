import { blogs } from './db.json'
import { useState, useEffect } from 'react'
import BlogResult from '../../ui/components/BlogResult'
import { IoMdSearch } from "react-icons/io";
import './Search.css'

const Search = () => {
  const [filter, setFilter] = useState("")

  const filters = [
    "Notícia", "Pesquisa", "Portaria", "Edital", "Evento", "Aluno", "Outros..."
  ]

  return (
    <div>
      <div className='container-xxl search-container mb-5 py-4 px-5 mt-5'>
        <form className='d-flex flex-wrap gap-5 pe-5 px-5'>
          <label htmlFor="search" className='fs-1 position-absolute'>
          <IoMdSearch color='white' className='mb-3'/>
          </label>
          <input type="text" id="search" className='search-input nav-bar-input' />
          <button className='btn btn-white button-outline fs-4'>Buscar</button>
        </form>
        <p className='fs-5 pt-4'>Buscando Resultados para: <span></span></p>
      </div>

      <section className='result-container container-xxl bg-white p-5 mb-5 position-relative'>
        <div className='filter-container'>
          <h1>Filtros</h1>
          <ul className=''>
            {filters.map((filter, i)=>{
              return <li key={i} className='pb-1 mb-4'>
                <a href="" className='fs-4'>{filter}</a>
              </li>
            })}
          </ul>
        </div>

        <div className='items-container'>
          {blogs.map((data, i) => {
            return <BlogResult key={i} title={data.title} description={data.description} image={data.image} category={data.category}/>
          })}
        </div>

        <nav className='py-5'>
          <ul class="pagination">
            <li class="page-item"><a class="page-link fs-5" href="#">Previous</a></li>
            <li class="page-item"><a class="page-link fs-5" href="#">1</a></li>
            <li class="page-item"><a class="page-link fs-5" href="#">2</a></li>
            <li class="page-item"><a class="page-link fs-5" href="#">3</a></li>
            <li class="page-item"><a class="page-link fs-5" href="#">Next</a></li>
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Search