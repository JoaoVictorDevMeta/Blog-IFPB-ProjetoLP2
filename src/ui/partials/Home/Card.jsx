import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ title = '', image, link, type = 'title-card' }) => {
  const placeholderImage =
    'https://www.ifpb.edu.br/servidor/noticias/2018/servidores-da-reitoria-podem-ter-acesso-ao-campus-joao-pessoa-com-cracha/campus-joao-pessoa.jpeg/@@images/77822a05-3289-4561-873f-29b093655af6.jpeg';

  return (
    <div className={'image-card position-relative'}>
      <img
        src={image || placeholderImage}
        alt=""
        className="position-absolute"
      />
      {type === 'title-card' ? (
        <div className="card-text position-relative h-100 d-flex align-items-end">
          <Link
            to={`/blog/${link}`}
            className="fs-3 p-2 pb-4 text-decoration-none fw-medium placeholder-glow"
          >
            {title || (
              <>
                <span className="placeholder col-9 fs-4"></span>
                <span className="placeholder col-5 fs-4 me-2"></span>
                <span className="placeholder col-5 fs-4"></span>
                <span className="placeholder col-2 fs-4 me-2"></span>
                <span className="placeholder col-6 fs-4"></span>
              </>
            )}
          </Link>
        </div>
      ) : (
        <div className="card-category position-relative h-100 d-flex align-items-end justify-content-center">
          <Link className="mb-5 fs-5" to={link}>
            Informática
          </Link>
        </div>
      )}
    </div>
  );
};
