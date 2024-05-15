import {useState} from 'react'
import './Register.css'
import { useForm } from "react-hook-form"

import InputField from '../../ui/components/inputs/Input'
import Button from '../../ui/components/buttons/Button'
import SelectField from '../../ui/components/inputs/Select'
import { sendUser } from '../../data/services/register'
import { Cursos } from './Cursos'

const Register = () => {
  const [curso, setCurso] = useState("");
  const [cursoError, setCursoError] = useState('');
  const [sendResponse, setSendResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const { 
    register,
    handleSubmit,
    formState: { errors, isValid},
  } = useForm({ mode: "onBlur"})

  const registerUser = async (data) => {
    setLoading(true)

    if (!curso) {
      setCursoError('Coloque seu Curso!');
      return;
    }
    data = {'curso': curso, ...data};

    sendUser(data)
    .then((response) => {
      //console.log(response)
      setSendResponse(response);
      setLoading(false)
    })
    .catch((error) => {
      setSendResponse(error);
      setLoading(false)
    })
  }

  return (
    <section className='register-container container-xl d-flex p-0' >
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
        <form className="d-flex flex-column" onSubmit={handleSubmit(registerUser)}>
          <h1 className='fs-1'>CADASTRO</h1>
          <p className='fs-4' style={{color: "#393646"}}>Cadastre-se e seja bem vindo a nossa comunidade</p>

          <div className="form-group pt-3">
            <InputField 
              label="Nome"
              type="text"
              id="nome"
              placeholder="Seu Nome"
              className='me-2 py-2 px-3 fs-5'
              registerOptions={register("nome",
              { required: true, minLength: 3,
                validate: {
                  noSpecialChars: value => /^[a-zA-Z0-9 ]*$/.test(value) || 'No special characters allowed'
              }})}
              errors={errors.nome}
            />

            <div className="w-100 text-start">
              <label htmlFor="seletor" className='form-label'>Curso</label>
              <SelectField 
                options={Cursos}
                defaultValue={{}}
                onChange={val => {
                  setCurso(val.value);
                  setCursoError('');
                }}
              />
              {cursoError && <small>{cursoError}</small>}
            </div>
          </div>

          <InputField 
            label="Email"
            type="email"
            id="email"
            placeholder="Seu Email"
            className=' py-2 px-3 fs-5'
            registerOptions={register("email", {
              required: true,
            })}
            errors={errors.email}
          />
          <InputField 
            label="Sua Senha"
            type="password"
            id="password"
            placeholder="Sua Senha"
            className=' py-2 ps-3 fs-5 pass'
            registerOptions={register("password",
            { required: true,
              minLength: 6,
              validate: {
                hasNumber: value => /\d/.test(value) || 'A senha deve conter pelo menos um número',
                hasSpecialChar: value => /[!@#$%^&*(),.?":{}|<>]/.test(value) || 'A senha deve conter pelo menos um caractere especial'
            }})}
            errors={errors.password}
          />
          <div className='w-100'>
            {sendResponse?.status == 201 && (
              <div className="alert alert-success" role="alert">
                Email de Verificação Enviado, Ir para <a href='/login'>Login</a>
              </div>
            )}
            {sendResponse?.status == 400 && (
              <div className="alert alert-warning" role="alert">
                Falha! Esse email ja está cadastrado!
              </div>
            )}
            {sendResponse?.status != 400 && sendResponse?.status != 201 && sendResponse && (
              <div className="alert alert-danger" role="alert">
                Algo deu Errado! Tente novamente
              </div>
            )}
          
            <Button type='outline' className="btn button-outline fs-4 mb-3 w-100" >
              {loading ? '...' : 'Cadastrar'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register