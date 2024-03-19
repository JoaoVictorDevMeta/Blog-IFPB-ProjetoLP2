import React from 'react'

const BlogResult = ({title, image, description, category}) => {
  return (
    <div className='result d-flex flex-wrap mb-4'>
        <div className="image">
            <img src={image} className='object-fit-contain align-bottom' alt={image}/>
            <div className='category py-2 px-3'>
                <span>{category}</span>
            </div>
        </div>
        <div className='text ps-4'>
            <a href="#" className="fw-medium fs-3 link-body-emphasis link-offset-2 link-underline-opacity-0">{title}</a>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default BlogResult