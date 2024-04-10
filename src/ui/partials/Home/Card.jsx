import React from 'react'

export const Card = ({title = '', image, link, type='title-card'}) => {
    return(
        <div className={'image-card position-relative'} >
            <img src='' alt='' className='position-absolute'/>
                { type==='title-card' ? (
                    <div className='card-text position-relative h-100 d-flex align-items-end'>
                        <a href={link} className='fs-3 p-2 pb-4 text-decoration-none fw-medium placeholder-glow'>
                            {title || (
                                <>
                                    <span className="placeholder col-9 fs-4"></span>
                                    <span className="placeholder col-5 fs-4 me-2"></span>
                                    <span className="placeholder col-5 fs-4"></span>
                                    <span className="placeholder col-2 fs-4 me-2"></span>
                                    <span className="placeholder col-6 fs-4"></span>
                                </>
                            )}
                        </a>
                    </div>
                ) : (
                    <div className='card-category position-relative h-100 d-flex align-items-end justify-content-center'>
                        <a className="mb-5 fs-5" href={link}>
                            Informática
                        </a>
                    </div>
                ) }
            </div>
        )
    }
