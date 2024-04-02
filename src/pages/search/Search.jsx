import { blogs } from './db.json'
import { useState, useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
import './Search.css'

import BlogResult from '../../ui/components/BlogResult'
import Button from '../../ui/components/buttons/Button'

const Search = () => {
  const [filter, setFilter] = useState("")

  const filters = [
    "Notícia", "Pesquisa", "Portaria", "Edital", "Evento", "Aluno", "Outros..."
  ]

  return (
    <div>
      <div className='container-xxl search-container mb-5 py-4 px-5 mt-5'>
        <form className='d-flex flex-wrap gap-5'>
          <label htmlFor="search" className='fs-1 position-absolute'>
          <IoMdSearch color='white' className='mb-3'/>
          </label>
          <input type="text" id="search" name='busca' className='search-input nav-bar-input' />
          <Button type='outline-white' className='fs-4'>Buscar</Button>
        </form>
        <p className='fs-5 pt-4' style={{color: "white"}}>Buscando Resultados para: <span></span></p>
      </div>

      <section className='result-container container-xxl bg-white p-5 mb-5 position-relative'>
        <div className='filter-container mb-5'>
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
          <h1 className='pb-5'>Resultados:</h1>
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