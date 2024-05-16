import { useState, useEffect } from 'react'
import { IoMdSearch } from "react-icons/io";
import { useSearch } from '../../data/hooks/search/useSearch'
import { useParams } from 'react-router-dom';
import './Search.css'

import BlogResult from '../../ui/components/BlogResult'
import Button from '../../ui/components/buttons/Button'

const Search = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const { query } = useParams();
  const filters = [
    "Notícia", "Pesquisa", "Portaria", "Edital", "Evento", "Aluno", "Outros..."
  ]

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    if(filter === event.target.textContent){
      setFilter("");
      return;
    }
    setFilter(event.target.textContent);
  };

  const { data: blogs, loading, error, fetchData } = useSearch();

  useEffect(() => {
    fetchData(query); 
  }, [query]);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    await fetchData(search, filter, 1);
  };

  return (
    <div>
      <div className='container-xxl search-container mb-5 py-4 px-5 mt-5'>
        <form className='d-falex flex-wrap gap-5' onSubmit={handleSearchSubmit}>
          <label htmlFor="search" className='fs-1 position-absolute'>
          <IoMdSearch color='white' className='mb-3'/>
          </label>
          <input 
            type="text" 
            id="search" 
            name='busca' 
            className='search-input nav-bar-input' 
            onChange={handleSearchChange}
          />
          <Button type='outline-white' className='fs-4'>Buscar</Button>
        </form>
        <p className='fs-5 pt-4' style={{color: "white"}}>Buscando Resultados para: <span></span></p>
      </div>

      <section className='result-container container-xxl bg-white mb-5 position-relative'>
        <div className='filter-container mb-5'>
          <h1>Filtros</h1>
          <ul className=''>
            {filters.map((filter, i)=>{
              return <li key={i} className='pb-1 mb-4'>
                <button onClick={handleFilterChange} className='fs-4'>{filter}</button>
              </li>
            })}
          </ul>
        </div>

        <div className='items-container'>
          <h1 className='pb-5'>Resultados:</h1>
            { loading ? (
                <div>
                  Loading...
                </div>
              ) : error ? (
                <div>
                  Error: {error.message}
                </div>
              ) : (
                blogs?.data.map((blog, i) => {
                  return (
                    <BlogResult
                      key={i}
                      title={blog.title}
                      description={blog.subTitle}
                      image={blog?.image || null}
                      category={blog?.category || "Outro"} 
                      link={blog.id}
                    />
                  );
                })
              )
            }
        </div>

        <nav className='py-5'>
          <ul className="pagination">
            <li className="page-item"><a className="page-link fs-5" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link fs-5" href="#">1</a></li>
            <li className="page-item"><a className="page-link fs-5" href="#">2</a></li>
            <li className="page-item"><a className="page-link fs-5" href="#">3</a></li>
            <li className="page-item"><a className="page-link fs-5" href="#">Next</a></li>
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Search