import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
    <section className="container-xxl ">
      <div className='account'>
        <div className='imageac'>
          <img src='https://w7.pngwing.com/pngs/213/343/png-transparent-computer-icons-user-background-icon-cdr-monochrome-name.png'/>
        </div>
        <div className='filter-container'>
          <h3>Ariana Grande</h3>
          <p>Aluno / Informática III</p>
          <br/>
          <p>Social media list</p>
        </div>
        <div className='background'>
          <h4>Sobre</h4>
          <p>Ronaldo Gogoni é formado em Análise de Desenvolvimento de Sistemas e Tecnologia da Informação pela Fatec (Faculdade de Tecnologia de São Paulo). No Tecnoblog, fez parte do TB Responde, explicando conceitos de hardware, facilitando o uso de aplicativos e ensinando truques em jogos eletrônicos. Atento ao mundo científico, escreve artigos focados em ciência e tecnologia para o Meio Bit desde 2013.</p>
        </div>
        <div className='postages'>
          <h2><b>Postagens realizadas</b></h2>
        </div>
      </div>

      <div className='d-flex flex-wrap gap-5'>
        
      </div>
    </section>
  )
}

export default Profile