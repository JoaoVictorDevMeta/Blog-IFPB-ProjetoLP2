import React from 'react';
import DOMPurify from 'dompurify';

function Texto(props) {
  const sanitizedContent = DOMPurify.sanitize(props.texto);

  return (
    <div className="conteudo-texto px-4">
      <p className="texto" dangerouslySetInnerHTML={{ __html: sanitizedContent }}></p>
    </div>
  );
}

export default Texto;