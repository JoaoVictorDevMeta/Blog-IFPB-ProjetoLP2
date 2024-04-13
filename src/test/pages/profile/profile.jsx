import React from 'react';
import Card from 'react-bootstrap/Card';

const Profile = () => {
  return (
    <section className="container-xxl">
      <div className='fundo'/>
      <Card className='card'>
        <Card.Body>
          <img className='photo' src='https://fmeldorado.com.br/wp-content/uploads/2024/01/ariana-grande-060523-4-329c2a0fc59b44d09608503641788567.jpg'/>
          <div className='filter-container'>
            <h3><b>Ariana Grande</b></h3>
            <p>Aluno / Informática III</p>
            <br/>
            <p><b>Instagram</b></p>
            <p><b>Facebook</b></p>
            <p><b>GitHub</b></p>
          </div>
        </Card.Body>
      </Card>
      <div className='about'>
        <h1>Sobre</h1>
        <p>Ronaldo Gogoni é formado em Análise de Desenvolvimento de Sistemas e Tecnologia da Informação pela Fatec (Faculdade de Tecnologia de São Paulo). No Tecnoblog, fez parte do TB Responde, explicando conceitos de hardware, facilitando o uso de aplicativos e ensinando truques em jogos eletrônicos. Atento ao mundo científico, escreve artigos focados em ciência e tecnologia para o Meio Bit desde 2013.</p>
      </div>
      <div className='d-flex flex-wrap gap-5'>
        <h3 className='post'><b>Postagens realizadas</b></h3>
        <div className='grid-container'>
          <div className='grid-item'>
            <img src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'/>
            <section className='type'>
              <p>Categoria</p>
            </section>
            <h4>Titulo do Blog em especifico, tratando o tema......</h4>
            <p>Titulo do Blog em especifico, tratando o teTitulo do Blog em especifico, tratando o tema......Titulo do Blog em especifico, tratando o tema......ma......</p>
          </div>
          <div className='grid-item'>
            <img src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'/>
            <section className='type'>
              <p>Categoria</p>
            </section>
            <h4>Titulo do Blog em especifico, tratando o tema......</h4>
            <p>Titulo do Blog em especifico, tratando o teTitulo do Blog em especifico, tratando o tema......Titulo do Blog em especifico, tratando o tema......ma......</p>
          </div> 
          <div className='grid-item'>
            <img src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'/>
            <section className='type'>
              <p>Categoria</p>
            </section>
            <h4>Titulo do Blog em especifico, tratando o tema......</h4>
            <p>Titulo do Blog em especifico, tratando o teTitulo do Blog em especifico, tratando o tema......Titulo do Blog em especifico, tratando o tema......ma......</p>
          </div> 
          <div className='grid-item'>
            <img src='https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'/>
            <section className='type'>
              <p>Categoria</p>
            </section>
            <h4>Titulo do Blog em especifico, tratando o tema......</h4>
            <p>Titulo do Blog em especifico, tratando o teTitulo do Blog em especifico, tratando o tema......Titulo do Blog em especifico, tratando o tema......ma......</p>
          </div>  
        </div>
      </div>
    </section>
  );
}
export default Profile;