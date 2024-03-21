import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <section className='register-container container-xl d-flex p-0 mt-5' >
      <div className='information p-5 position-relative'>
        <div className='p-5 text-center '>
          <h2 className='fs-1 fw-bold pb-4'>Seja Bem Vindo!</h2>
          <p className='fs-5 fw-light'>
            Caso tenha uma conta clique no link abaixo para autenticar-se ao site
          </p>
          <p className='fs-5 fw-light'>
            O cadastro no site é exclusivo para estudantes da instituição e que possuem um email acadêmico
          </p>
        </div>
        <div className='position-absolute w-100 text-center link-info'>
          <a href="/login" className='fs-3'> Logar-se </a>
        </div>
      </div>
      <div className='login-form p-5 text-center d-flex justify-content-center'>
        <form className="d-flex flex-column">
          <h1 className='fs-1'>CADASTRO</h1>
          <p className='fs-4' style={{color: "#393646"}}>Cadastre-se e seja bem vindo a nossa comunidade</p>

          <div className="form-group pt-3">
            <div className='input-text text-start'>
              <label htmlFor="nome" className='form-label'>Nome</label>
              <input 
                type="text" 
                id="nome" 
                placeholder="Seu Nome"
                className='me-2 py-2 px-3 fs-5' 
              />
            </div>
            <div className='input-text text-start'>
              <label htmlFor="class" className='form-label ms-2'>Curso</label>
              <input 
                type="text" 
                id="class" 
                placeholder="Curso do IFPB"
                className='ms-2 py-2 px-3 fs-5' 
              />
            </div>
          </div>

          <div className='input-text text-start'>
              <label htmlFor="email" className='form-label'>Email Academico</label>
              <input 
                type="text" 
                id="email" 
                placeholder="Seu email academico"
                className=' py-2 px-3 fs-5' 
              />
          </div>
          <div className='input-text text-start'>
              <label htmlFor="password" className='form-label'>Senha</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Sua Senha"
                className=' py-2 px-3 fs-5' 
              />
          </div>

          <button className="btn button-outline mx-5 fs-4 mb-3" >
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Register