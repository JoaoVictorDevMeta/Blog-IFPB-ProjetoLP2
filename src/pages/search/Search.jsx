import { useState, useEffect } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { useSearch } from '../../data/hooks/search/useSearch';
import { useParams } from 'react-router-dom';
import './Search.css';

import BlogResult from '../../ui/components/blogItem/BlogResult';
import BlogPlaceholder from '../../ui/components/blogItem/BlogPlaceholder';
import Button from '../../ui/components/buttons/Button';
import Footer from '../../ui/components/footer/Footer';
import { Pagination } from '../../ui/partials/Search/Pagination';

const Search = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState('');
  const { query } = useParams();
  const filters = [
    'Notícia',
    'Pesquisa',
    'Portaria',
    'Edital',
    'Evento',
    'Projeto',
    'Outros...',
  ];

  const handlePageChange = async (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (event) => {
    if (filter === event.target.textContent) {
      setFilter('');
      return;
    }
    setFilter(event.target.textContent);
  };

  const { data: blogs, loading, error, fetchData } = useSearch();

  useEffect(() => {
    fetchData(query);
    setSearched(query);
  }, [query]);

  useEffect((filter, search) => {
    fetchData(search, filter, currentPage);
  }, [currentPage]);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setCurrentPage(1);
    setSearched(search);
    await fetchData(search, filter, 1);
  };

  return (
    <div>
      <div className="container-xxl search-container mb-5 py-4 px-5 mt-5">
        <form className="d-flex flex-wrap gap-5" onSubmit={handleSearchSubmit}>
          <label htmlFor="search" className="fs-1 position-absolute">
            <IoMdSearch color="white" className="mb-3" />
          </label>
          <input
            type="text"
            id="search"
            name="busca"
            className="search-input nav-bar-input"
            onChange={(event) => setSearch(event.target.value)}
          />
          <Button type="outline-white" className="fs-4">
            Buscar
          </Button>
        </form>
        <p className="fs-5 pt-4" style={{ color: 'white' }}>
          Buscando Resultados para: <span>{searched}</span>
        </p>
      </div>

      <section className="result-container container-xxl bg-white mb-5 position-relative">
        <div className="filter-container mb-5">
          <h1>Filtros</h1>
          <ul className="">
            {filters.map((filterItem, i) => {
              return (
                <li key={i} className="pb-1 mb-4">
                  <button
                    onClick={handleFilterChange}
                    className={`fs-4 ${filter === filterItem ? 'active-filter' : ''}`}
                  >
                    {filterItem}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="items-container">
          <h1 className="pb-5">Resultados:</h1>
          {loading ? (
            <div>
              {[...Array(7)].map((_, i) => (
                <BlogPlaceholder key={i} />
              ))}
            </div>
          ) : error ? (
            <div>Error: {error.message}</div>
          ) : (
            blogs?.data.map((blog, i) => {
              return (
                <BlogResult
                  key={i}
                  title={blog.title}
                  description={blog.subTitle}
                  image={blog?.content.imageUrl || null}
                  category={blog?.category || 'Outro'}
                  link={blog.id}
                />
              );
            })
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={blogs?.totalPages}
          handlePageChange={handlePageChange}
        />
      </section>

      <Footer />
    </div>
  );
};

export default Search;
