import { blogs } from './db.json'

import BlogResult from '../../ui/components/BlogResult'
import './Search.css'

const Search = () => {
  return (
    <div>
      <div className='container-xxl search-container mb-5 py-3 px-5'>
        <form>
          <input type="text" />
          <button>Buscar</button>
        </form>
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