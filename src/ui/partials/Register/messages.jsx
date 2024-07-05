import React from 'react';

const RegisterMessages = ({data, error}) => {
  return (
    <>
      {data?.message && (
        <div className="alert alert-success" role="alert">
          Email de Verificação Enviado, Ir para <a href="/login">Login</a>
        </div>
      )}
      {error?.response.data?.message && (
        <div className="alert alert-warning" role="alert">
          Falha! Esse email ja está cadastrado ou não foi verificado.
        </div>
      )}
      {error?.response?.data?.error?.includes('"email"') ? (
        <div className="alert alert-warning" role="alert">
          Para registrar-se no site deve ser utilizado o email academico
          disponibilizado pela instituição. Caso possua um e o erro persista,
          contactar administração do site para resolução do problema!
        </div>
      ) : (
        error?.response.data?.error && (
          <div className="alert alert-warning" role="alert">
            Campos do formulário inválidos!
          </div>
        )
      )}
      {error?.response.status != 400 &&
        error?.response.status != 201 &&
        error?.response.status && (
          <div className="alert alert-danger" role="alert">
            Algo deu Errado! Tente novamente
          </div>
        )}
    </>
  );
};

export default RegisterMessages;
