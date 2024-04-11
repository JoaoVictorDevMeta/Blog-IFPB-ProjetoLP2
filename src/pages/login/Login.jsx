import React, {useState} from 'react';
import './LoginPage.css';

import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../data/reducers/auth/authSlice';
import { login } from '../../data/reducers/auth/authApiSlice';

import InputField from '../../ui/components/inputs/Input'
import Button from '../../ui/components/buttons/Button';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [ errMsg, setErrMsg ] = useState('')
  const [ mailMsg, setMailMsg ] = useState('')

  const { 
    register,
    handleSubmit,
    formState: { errors, isValid},
  } = useForm({ mode: "onBlur"})

  const userLogin = async (data) => {
    const {email, password} = data
    setLoading(true)
    try{
      const userData = await dispatch(login({ email, password })).unwrap();
      dispatch(setUser(userData))
      navigate('/')
    } catch(e) {
      console.log(e.message)
      setErrMsg('')
      setMailMsg('')
      //error treatment
      if(!e?.code){
        setErrMsg('Erro no Servidor, tente novamente mais tarde');
      }else if (e?.message === 'Request failed with status code 400') {
        setMailMsg('Um email foi enviando para sua conta, por favor verifique!')
      }else if(e?.message === 'Request failed with status code 401'){
        setErrMsg('Usuário ou senha inválidos');
      }else {
        setErrMsg('Usuário não verificado, ou ja está logado');
      }
      setLoading(false)
    }
  }

  return (
    <section className='register-container container-xl d-flex p-0'>
      <div className='information p-5 position-relative'>
        <div className='p-5 text-center '>
          <h2 className='fs-1 fw-bold pb-4'>Bem Vindo de Volta!</h2>
          <p className='fs-5 fw-light'>
            Caso seja um estudante e não tenha cadastro clique no botão abaixo para ter uma melhor experiência
          </p>
        </div>
        <div className='position-absolute w-100 text-center link-info'>
          <a href="/register" className='fs-3'> Cadastrar-se </a>
        </div>
      </div>
      <div className='login-form login p-5 text-center d-flex justify-content-center'>
        <form className="d-flex flex-column" onSubmit={handleSubmit(userLogin)}>
          <h1 className='fs-1'>LOGIN</h1>
          <p className='fs-4' style={{color: "#393646"}}>Bem-vindo de volta, estudante!</p>

          <InputField 
            label="Email"
            type="email"
            id="email"
            placeholder="Email"
            className='me-2 py-2 px-3 fs-5'
            registerOptions={register("email", {
              required: true,
            })}
            errors={errors.email}
          />

          <InputField 
            label="Senha"
            type="password"
            id="password"
            placeholder="Senha"
            className=' py-2 ps-3 fs-5 pass'
            registerOptions={register("password", {
              required: true,
            })}
            errors={errors.password}
          />

            {errMsg && (
              <div className="alert  alert-danger" role="alert">
                {errMsg}
              </div>
            )}
            {mailMsg && (
              <div className="alert alert-success">
                {mailMsg}
              </div>
            )}

          <Button type='outline' className="btn button-outline mx-5 fs-4 mb-3" >
           {loading ? '...' : 'Logar'}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Login