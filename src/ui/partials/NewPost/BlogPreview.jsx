import React from 'react';
import { UserLoggedInfo } from '../../../data/utils/userLoggedInfo';

import Categoria from '../Blog/Categoria';
import Title from '../Blog/Title';
import Imagem from '../Blog/Imagem';
import Titulo from '../Blog/Titulo';
import Texto from '../Blog/Texto';
import Subtitle from '../Blog/Subtitle';

export const BlogPreview = ({ title, description, blogCells }) => {
    const currentUser = UserLoggedInfo();

  return (
    <>
      <Categoria categoria="Categoria" />
      <Title title={title} />
      <Subtitle
          subtitle={description}
          autor={currentUser.name}
          link={currentUser.id}
          image={currentUser.imageUrl}
          data={'Editando...'}
          atualizado={'...'}
          dif={false}
        />
      {blogCells.map((element) => (
        <React.Fragment key={element.id}>
          {element.image.name !== 'File' && (
            <Imagem
              image={element.image}
              alt="Imagem do conteúdo"
              descricao="Descrição da imagem"
              autor="João Victor"
              fonte="Google"
            />
          )}
          <Titulo titulo={element.title} />
          <Texto texto={element.content} />
        </React.Fragment>
      ))}
    </>
  );
};
