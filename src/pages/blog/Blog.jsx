import React from 'react';
import './Blog.css';
import { FaRegCommentAlt } from 'react-icons/fa';
import { IoShareSocial } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import useFetchBlog from '../../data/hooks/blog/useBlog';
import { formatTimeAgo } from '../../data/utils/formatTimeAgo';

import Categoria from '../../ui/partials/Blog/Categoria';
import Title from '../../ui/partials/Blog/Title';
import Titulo from '../../ui/partials/Blog/Titulo';
import Subtitle from '../../ui/partials/Blog/Subtitle';
import Texto from '../../ui/partials/Blog/Texto';
import Imagem from '../../ui/partials/Blog/Imagem';
import Autor from '../../ui/partials/Blog/Autor';
import CommentSection from '../../ui/partials/Blog/CommentSection';
import Button from '../../ui/components/buttons/Button';
import Footer from '../../ui/components/footer/Footer';
import LoadingSpinner from '../../ui/components/spinner/Spinner';

const Blog = () => {
  const { data: blog, loading, error } = useFetchBlog();
  let dif = false;
  if (blog?.createdAt !== blog?.editedAt) dif = true;

  // if some error occurs on server or fetch
  if (error) return <div>Erro: {error}</div>;

  // loading spinner
  if (loading) return <LoadingSpinner />;

  return (
    <>
      <section className="container-xxl conteudo-xxl mt-5 py-5">
        <Categoria categoria={blog?.category} />
        <Title title={blog?.title} />
        <Subtitle
          subtitle={blog?.subTitle}
          autor={blog?.author.name}
          link={blog?.author.id}
          image={blog?.author.imageUrl}
          data={formatTimeAgo(blog?.createdAt)}
          atualizado={formatTimeAgo(blog?.editedAt)}
          dif={dif}
        />
        {blog?.content.map((contentItem, index) => (
          <React.Fragment key={index}>
            {contentItem.imageUrl && (
              <Imagem
                image={contentItem.imageUrl}
                alt="Imagem do conteúdo"
                descricao="Descrição da imagem"
                autor="João Victor"
                fonte="Google"
              />
            )}
            <Titulo titulo={contentItem.title} />
            <Texto texto={contentItem.content} />
          </React.Fragment>
        ))}
      </section>
      <div className="blog-information container-xxl pb-5">
        <ul className="d-flex gap-5 pt-4 ps-0">
          <li>
            <a href="" className="btn btn-outline">
              <FaRegCommentAlt className="fs-4 me-2" /> 3
            </a>
          </li>
          <li>
            <a href="" className="btn btn-outline">
              <IoShareSocial className="fs-4 me-2" /> Compartilhar
            </a>
          </li>
          <li>
            <Button type="outline">
              <FaRegHeart className="fs-4 me-2" /> 54
            </Button>
          </li>
        </ul>
      </div>
      <Autor
        autor={blog?.author.name}
        tipo={blog?.author.role}
        area={blog?.author.course}
        texto={blog?.author.description}
        image={blog?.author.imageUrl}
        link={blog?.author.id}
      ></Autor>
      <CommentSection />
      <Footer />
    </>
  );
};

export default Blog;
