import React from 'react'
import './Blog.css'
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import useFetchBlog from '../../data/hooks/blog/useBlog';
import { formatTimeAgo } from '../../data/utils/formatTimeAgo';

import Categoria from '../../ui/partials/Blog/Categoria'
import Title from '../../ui/partials/Blog/Title'
import Titulo from '../../ui/partials/Blog/Titulo'
import Subtitle from '../../ui/partials/Blog/Subtitle'
import Texto from '../../ui/partials/Blog/Texto'
import Imagem from '../../ui/partials/Blog/Imagem'
import Autor from '../../ui/partials/Blog/Autor'
import CommentSection from '../../ui/partials/Blog/CommentSection';
import Button from '../../ui/components/buttons/Button'

const Blog = () => {
  const { data: blog, loading, error, fetchData } = useFetchBlog();
  let dif = false
  if ( blog?.createdAt !== blog?.editedAt) dif = true;

  return (
    <>
    <section className="container-xxl conteudo-xxl mt-5 py-5">
      <Categoria categoria="Categoria"/>
      <Title title={blog?.title}/> 
      <Subtitle 
        subtitle={blog?.subTitle} 
        autor={blog?.author.name}
        image={blog?.author.imageUrl}
        data={formatTimeAgo(blog?.createdAt)} 
        atualizado={formatTimeAgo(blog?.editedAt)}
        dif={dif}  
      />
      {
        blog?.content.map((contentItem, index) => (
          <React.Fragment key={index}>
            {contentItem.imageUrl && 
              <Imagem 
                image={contentItem.imageUrl}
                alt="Imagem do conteúdo" 
                descricao="Descrição da imagem" 
                autor="João Victor" 
                fonte="Google"
              />
            }
            <Titulo titulo={contentItem.title} />
            <Texto texto={contentItem.content} />
          </React.Fragment>
        ))
      }
    </section>
    <div className='blog-information container-xxl pb-5'>
      <ul className='d-flex gap-5 pt-4 ps-0'>
        <li>
          <a href="" className='btn btn-outline'><FaRegCommentAlt className='fs-4 me-2'/> 3</a>
        </li>
        <li>
          <a href="" className='btn btn-outline'><IoShareSocial className='fs-4 me-2'/> Compartilhar</a>
        </li>
        <li>
          <Button type='outline'><FaRegHeart className='fs-4 me-2'/> 54</Button>
        </li>
      </ul>
    </div>
    <Autor autor="Ariana Grande" tipo="Aluno" area="Informática III" texto="Ronaldo Gogoni é formado em Análise de Desenvolvimento de Sistemas e Tecnologia da Informação pela Fatec (Faculdade de Tecnologia de São Paulo). No Tecnoblog, fez parte do TB Responde, explicando conceitos de hardware, facilitando o uso de aplicativos e ensinando truques em jogos eletrônicos. Atento ao mundo científico, escreve artigos focados em ciência e tecnologia para o Meio Bit desde 2013.">
    </Autor>
    <CommentSection/>
    </>
  )
}

export default Blog