import React from 'react'
import './Home.css'
import { blogs } from './db.json'
import useFetchHome from '../../data/hooks/home/useHome'

import Logo from '../../assets/Test Logo.png'
import { Card } from '../../ui/partials/Home/Card'
import BlogResult from '../../ui/components/BlogResult'
import Footer from '../../ui/components/footer/Footer'

const Home = () => {
  const { data, loading, error } = useFetchHome();
  const { recent, trending } = data || {};

  return (
    <>
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
          title={trending?.[0].title}
          image={trending?.[0].content.imageUrl}
          link={trending?.[0].id}
        />
        <Card
          title={trending?.[1].title}
          image={trending?.[1].content.imageUrl}
          link={trending?.[1].id}
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
          {trending?.slice(1, 6).map((data, i) => {
              return <BlogResult 
              key={i} 
              title={data.title} 
              description={data.subTitle} 
              image={data.content.imageUrl} 
              link={data.id}
              category={data.categories?.[0].name}
            />
          })}
        </div>
      </section>
    </section>
    <Footer/>
    </>
  )
}

export default Home