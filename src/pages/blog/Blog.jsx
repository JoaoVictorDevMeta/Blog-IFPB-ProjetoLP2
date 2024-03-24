import React from 'react'
import './Blog.css'

import Categoria from '../../ui/partials/Categoria'
import Title from '../../ui/partials/Title'
import Titulo from '../../ui/partials/Titulo'
import Subtitle from '../../ui/partials/Subtitle'
import Texto from '../../ui/partials/Texto'
import Imagem from '../../ui/partials/Imagem'
import Autor from '../../ui/partials/Autor'

const Blog = () => {
  return (
    <>
    <section class="container-xxl conteudo-xxl mt-5 py-5 mb-5">
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
    <Autor autor="Ariana Grande" tipo="Aluno" area="Informática III" texto="Ronaldo Gogoni é formado em Análise de Desenvolvimento de Sistemas e Tecnologia da Informação pela Fatec (Faculdade de Tecnologia de São Paulo). No Tecnoblog, fez parte do TB Responde, explicando conceitos de hardware, facilitando o uso de aplicativos e ensinando truques em jogos eletrônicos. Atento ao mundo científico, escreve artigos focados em ciência e tecnologia para o Meio Bit desde 2013.">
    </Autor>
    </>
  )
}

export default Blog