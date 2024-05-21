import React from 'react'

const Profile = () => {
  return (
    <section className="container-xxl mt-5">
        <div className='user-info'>
            <div className='banner'>
                <img src='' alt=''></img>
            </div>

            <div className='user-card'>
                <img src='' alt=''></img>
                <h2 className='user-name'>Ariana Grande</h2>
                <p className='user-role'>Aluno / Informática III</p>
                <ul className='social-media'>
                    <li>
                        <a href='#' className='fs-4 link-body-emphasis link-offset-2 link-underline-opacity-0'>GitHub</a>
                    </li>
                    <li>
                        <a href='#' className='fs-4 link-body-emphasis link-offset-2 link-underline-opacity-0'>Facebook</a>
                    </li>
                    <li>
                        <a href='#' className='fs-4 link-body-emphasis link-offset-2 link-underline-opacity-0'>Instagram</a>
                    </li>
                </ul>
            </div>

            <div className='user-desc'>
                <h4>Sobre</h4>
                <p>Ronaldo Gogoni é formado em Análise de Desenvolvimento de Sistemas e Tecnologia da Informação pela Fatec (Faculdade de Tecnologia de São Paulo). No Tecnoblog, fez parte do TB Responde, explicando conceitos de hardware, facilitando o uso de aplicativos e ensinando truques em jogos eletrônicos. Atento ao mundo científico, escreve artigos focados em ciência e tecnologia para o Meio Bit desde 2013.</p>
            </div>

            <div className='user-posts'>
                <h2><b>Postagens realizadas</b></h2>
                <div>
                    <div className='d-flex flex-wrap gap-5'>
                        <div className='post-card'>
                            <img src='' alt=''></img>
                            <h3 className='post-title'>Título da postagem</h3>
                            <p className='post-content'>Conteúdo da postagem</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Profile