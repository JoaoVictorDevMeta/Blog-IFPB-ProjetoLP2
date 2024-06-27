import React, { useState, useEffect } from 'react';

function Imagem(props) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (props.image && props.image instanceof Blob) {
      const reader = new FileReader();
      reader.readAsDataURL(props.image);
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
    } else {
      setImageUrl(props.image);
    }
  }, [props.image]); 

  return (
    <div className="conteudo-imagem px-4">
      <img
        className="imagem-inicial"
        src={
          imageUrl ||
          'https://files.tecnoblog.net/wp-content/uploads/2022/05/blog.png'
        }
        alt={props.alt}
      />
      <p className="descricao">
        {props.descricao} / {props.autor} / {props.fonte}
      </p>
    </div>
  );
}

export default Imagem;