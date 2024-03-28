import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({ label, type, id, placeholder, className, registerOptions, errors }) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className='input-text text-start' style={{position: 'relative'}}>
      <label htmlFor={id} className='form-label'>{label}</label>

        <input 
          type={inputType} 
          id={id} 
          placeholder={placeholder}
          className={className} 
          {...registerOptions}
        />
        {type === 'password' && (
          <button 
            type="button" 
            className='btn'
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }} 
            onClick={togglePasswordVisibility}
          >
            {inputType === 'password' ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      <small>
        {errors?.type === "required" && <span>Campo Obrigatório</span>}
        {errors?.type === "minLength" && <span>Muito pequeno</span>}
        {errors?.type === "noSpecialChars" && <span>Apenas Letras e Números</span>}
        {errors?.type === "hasNumber" && <span>Inclua um número em sua Senha</span>}
        {errors?.type === "hasSpecialChar" && <span>Inclua um caractére especial</span>}
      </small>
    </div>
  );
};

export default InputField;