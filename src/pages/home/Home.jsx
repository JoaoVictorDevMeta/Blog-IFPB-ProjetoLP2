import React from 'react'
import './Home.css'
import { blogs } from './db.json'

import Logo from '../../assets/Test Logo.png'
import { Card } from '../../ui/partials/Home/Card'
import BlogResult from '../../ui/components/BlogResult'

const Home = () => {
  return (
    <section className="container-xxl conteudo-xxl mt-5 py-5 px-0w">
      <section className="card-list d-flex justify-content-between gap-3">
        <div className="presentation-card">
          <img src={Logo} alt=""/>
          <h1>
            De estudante para estudante
          </h1>
          <p className="placeholder-glow fs-5">
            Inspirational designs, illustrations, and graphic elements from the world’s best designers. Want more inspiration? Browse our search results...
          </p>
          <a href='#' className="square-link fw-bold placeholder-glow">
            Veja oque está acontecendo
          </a>
        </div>

        <Card
          title='IFPB aprova greve e estudantes ficam revoltados'
          image=''
          link=''
        />
        <Card
          title=''
          image=''
          link=''
        />
      </section>
      <div className='category-list'>
      </div>

      <section className='sugestions'>
        <div className='slider'>
          
        </div>

        <h1 className='text-center py-5'>
          MAIS RECENTES
        </h1>

        <div className="card-list d-flex justify-content-between gap-5 p-0 ">
          <Card
            image=''
            link=''
            type='category'
          />
          <Card
            image=''
            link=''
            type='category'
          />
          <Card
            image=''
            link=''
            type='category'
          />
        </div>

        <h1 className='text-center py-5'>
          EM ALTA
        </h1>

        <div className='items-container'>
          {blogs.map((data, i) => {
            return <BlogResult key={i} title={data.title} description={data.description} image={data.image} category={data.category}/>
          })}
        </div>
      </section>
    </section>
  )
}

export default Home