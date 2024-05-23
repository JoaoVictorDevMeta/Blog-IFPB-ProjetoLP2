import React from 'react'

const BlogResult = ({title, image, description, category, link}) => {
  const placeholderImage = 'https://www.ifpb.edu.br/servidor/noticias/2018/servidores-da-reitoria-podem-ter-acesso-ao-campus-joao-pessoa-com-cracha/campus-joao-pessoa.jpeg/@@images/77822a05-3289-4561-873f-29b093655af6.jpeg'

  return (
    <div className='result d-flex flex-wrap mb-4'>
        <div className="image">
            <img src={image || placeholderImage} alt={image}/>
            <div className='category py-2 px-3'>
                <span>{category}</span>
            </div>
        </div>
        <div className='text'>
            <a href={`/blog/${link}`} className="fw-medium fs-3 link-body-emphasis link-offset-2 link-underline-opacity-0">{title}</a>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default BlogResult