import { useState } from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';

import InputField from '../../ui/components/inputs/Input';
import Button from '../../ui/components/buttons/Button';
import RegisterMessages from '../../ui/partials/Register/messages';
import SelectField from '../../ui/components/inputs/Select';
import useRegister from '../../data/hooks/auth/useRegister';
import { Cursos } from './Cursos';

const Register = () => {
  const [curso, setCurso] = useState('');
  const [cursoError, setCursoError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const { isLoading, error, data, execute } = useRegister();

  const registerUser = async (data) => {
    if (!curso) {
      return setCursoError('Coloque seu Curso!');
    }
    data = { course: curso, ...data };

    execute(data);
  };

  return (
    <section className="register-container container-xl d-flex p-0">
      <div className="information p-5 position-relative">
        <div className="p-5 text-center ">
          <h2 className="fs-1 fw-bold pb-4">Seja Bem Vindo!</h2>
          <p className="fs-5 fw-light">
            Caso tenha uma conta clique no link abaixo para autenticar-se ao
            site
          </p>
          <p className="fs-5 fw-light">
            O cadastro no site é exclusivo para estudantes da instituição e que
            possuem um email acadêmico
          </p>
        </div>
        <div className="position-absolute w-100 text-center link-info">
          <a href="/login" className="fs-3">
            {' '}
            Logar-se{' '}
          </a>
        </div>
      </div>
      <div className="login-form p-5 text-center d-flex justify-content-center">
        <form
          className="d-flex flex-column"
          onSubmit={handleSubmit(registerUser)}
        >
          <h1 className="fs-1">CADASTRO</h1>
          <p className="fs-4" style={{ color: '#393646' }}>
            Cadastre-se e seja bem vindo a nossa comunidade
          </p>

          <div className="form-group pt-3">
            <InputField
              label="Nome"
              type="text"
              id="nome"
              placeholder="Seu Nome"
              className="me-2 py-2 px-3 fs-5"
              registerOptions={register('nome', {
                required: true,
                minLength: 3,
                validate: {
                  noSpecialChars: (value) =>
                    /^[A-Za-z0-9]*$/.test(value) ||
                    'No special characters allowed',
                },
              })}
              errors={errors.nome}
            />

            <div className="w-100 text-start">
              <label htmlFor="seletor" className="form-label">
                Curso
              </label>
              <SelectField
                options={Cursos}
                defaultValue={{}}
                onChange={(val) => {
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
            className=" py-2 px-3 fs-5"
            registerOptions={register('email', {
              required: true,
            })}
            errors={errors.email}
          />
          <InputField
            label="Sua Senha"
            type="password"
            id="password"
            placeholder="Sua Senha"
            className=" py-2 ps-3 fs-5 pass"
            registerOptions={register('password', {
              required: true,
              minLength: 6,
              validate: {
                hasNumber: (value) =>
                  /\d/.test(value) ||
                  'A senha deve conter pelo menos um número',
                hasSpecialChar: (value) =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                  'A senha deve conter pelo menos um caractere especial',
              },
            })}
            errors={errors.password}
          />
          <div className="w-100">
            <RegisterMessages error={error} data={data} />

            <Button
              type="outline"
              className="btn button-outline fs-4 mb-3 w-100"
            >
              {isLoading ? '...' : 'Cadastrar'}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
