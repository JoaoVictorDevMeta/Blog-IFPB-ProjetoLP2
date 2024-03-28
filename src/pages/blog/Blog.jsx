import React from 'react'
import './Blog.css'
import { FaRegCommentAlt } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

import Categoria from '../../ui/partials/Blog/Categoria'
import Title from '../../ui/partials/Blog/Title'
import Titulo from '../../ui/partials/Blog/Titulo'
import Subtitle from '../../ui/partials/Blog/Subtitle'
import Texto from '../../ui/partials/Blog/Texto'
import Imagem from '../../ui/partials/Blog/Imagem'
import Autor from '../../ui/partials/Blog/Autor'
import CommentSection from '../../ui/partials/Blog/CommentSection';

const Blog = () => {
  return (
    <>
    <section className="container-xxl conteudo-xxl mt-5 py-5">
      <Categoria categoria="Categoria"/>
      <Title title="O que é um Blog? Venha descobrir mais sobre"/> 
      <Subtitle subtitle="Também conhecido como diário online, o blog é um site informativo que se popularizou nos anos 2000 e apresenta conteúdos em ordem cronológica reversa" autor="Ariana Grande" data="1 semana atrás" atualizado="2"/>
      <Imagem alt="Imagem inicial" descricao="Descrição da imagem" autor="João Victor" fonte="Google"/>
        <Texto texto="O blog é um site pessoal ou profissional que popularizou (e muito) a produção de conteúdo na internet. Hoje, é o principal meio de comunicação de diversos portais, como o Tecnoblog. Veja abaixo o que é blog e como ele surgiu."/>
        <Texto texto="Blog é um site informativo, também chamado de diário online, onde os conteúdos são apresentados em ordem cronológica inversa, ou seja, com destaque para as publicações mais recentes, muitas vezes chamadas de blog post."/>
        <Texto texto="Mesmo trazendo aparências variadas, um blog, geralmente, segue a mesma estrutura: cabeçalho com barra de menu e pesquisa; espaço dos conteúdos, onde são destacadas as publicações mais recentes; barra lateral onde pode ter links para redes sociais ou os conteúdos mais lidos; e rodapé com demais informações sobre o blog."/>
      <Titulo titulo="The Digital Marketing"/>
        <Texto texto="Mesmo trazendo aparências variadas, um blog, geralmente, segue a mesma estrutura: cabeçalho com barra de menu e pesquisa; espaço dos conteúdos, onde são destacadas as publicações mais recentes; barra lateral onde pode ter links para redes sociais ou os conteúdos mais lidos; e rodapé com demais informações sobre o blog."/>
        <Texto texto="Blog é um site informativo, também chamado de diário online, onde os conteúdos são apresentados em ordem cronológica inversa, ou seja, com destaque para as publicações mais recentes, muitas vezes chamadas de blog post s."/>
        <Texto texto="Mesmo trazendo aparências variadas, um blog, geralmente, segue a mesma estrutura: cabeçalho com barra de menu e pesquisa; espaço dos conteúdos, onde são destacadas as publicações mais recentes; barra lateral onde pode ter links para redes sociais ou os conteúdos mais lidos; e rodapé com demais informações sobre o blog."/>
    </section>
    <div className='blog-information container-xxl pb-5'>
      <ul className='d-flex gap-5 pt-4 ps-0'>
        <li>
          <a href="" className='btn button-outline'><FaRegCommentAlt className='fs-4 me-2'/> 3</a>
        </li>
        <li>
          <a href="" className='btn button-outline'><IoShareSocial className='fs-4 me-2'/> Compartilhar</a>
        </li>
        <li>
          <button className='btn button-outline'><FaRegHeart className='fs-4 me-2' /> 54</button>
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