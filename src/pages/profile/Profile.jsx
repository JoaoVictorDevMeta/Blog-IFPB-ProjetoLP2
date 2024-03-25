import React from 'react'
import './Profile.css'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Profile = () => {
  const mediaList = [
    <FaGithub />,
    <FaFacebook/>,
    <FaInstagram />,
  ]

  return (
    <section className="container-xxl mt-5">
      <div className='account d-flex flex-wrap gap-5'>
        <div className='imageac'>
          <img src='https://fmeldorado.com.br/wp-content/uploads/2024/01/ariana-grande-060523-4-329c2a0fc59b44d09608503641788567.jpg'/>
        </div>
        <div className=' text'>
          <h2 className='fw-bolder'>Ariana Grande</h2>
          <p className='fs-5'>Aluno / Informática III</p>
          <ul className='social-media d-flex gap-4 ps-0'>
            {mediaList.map((media, index) => (
              <li key={index}>
                <a href="#" className="fs-4 link-body-emphasis link-offset-2 link-underline-opacity-0">{media}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='background mt-4'>
        <h4>Sobre</h4>
        <p>Ronaldo Gogoni é formado em Análise de Desenvolvimento de Sistemas e Tecnologia da Informação pela Fatec (Faculdade de Tecnologia de São Paulo). No Tecnoblog, fez parte do TB Responde, explicando conceitos de hardware, facilitando o uso de aplicativos e ensinando truques em jogos eletrônicos. Atento ao mundo científico, escreve artigos focados em ciência e tecnologia para o Meio Bit desde 2013.</p>
      </div>
      <div className='postages'>
        <h2><b>Postagens realizadas</b></h2>
        <div className='d-flex flex-wrap gap-5'>
        
        </div>
      </div>
    </section>
  )
}

export default Profile