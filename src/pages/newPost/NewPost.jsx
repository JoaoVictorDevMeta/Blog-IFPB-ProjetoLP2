import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAddBlog from '../../data/hooks/newpost/useAddBlog';

import './NewPost.css';
import Swal from 'sweetalert2';
import InputField from '../../ui/components/inputs/Input';

import BlogCellsTransitionGroup from '../../ui/partials/NewPost/BlogGroupCell';
import { BlogPreview } from '../../ui/partials/NewPost/BlogPreview';

const NewPost = () => {
  const [blogCells, setBlogCells] = useState([
    { id: 1, title: '', content: '', image: File },
  ]);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [referenceText, setReferenceText] = useState('');
  const [references, setReferences] = useState([]);
  const [blogPreviwOn, setBlogPreviewOn] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });
  const {
    isLoading: isAdding,
    error: addError,
    data: addData,
    execute: addBlog,
  } = useAddBlog();

  //BlogCell Logic
  const updateBlogCellTitle = (id, newTitle) => {
    setBlogCells(
      blogCells.map((cell) =>
        cell.id === id ? { ...cell, title: newTitle } : cell,
      ),
    );
  };

  const updateBlogCellContent = (id, newContent) => {
    setBlogCells(
      blogCells.map((cell) =>
        cell.id === id ? { ...cell, content: newContent } : cell,
      ),
    );
  };

  const updateBlogCellImage = (id, newImage) => {
    setBlogCells(
      blogCells.map((cell) =>
        cell.id === id ? { ...cell, image: newImage } : cell,
      ),
    );
  };
  const addBlogCell = () => {
    if (blogCells.length >= 5) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Você atingiu o limite de células!',
      });
    }
    setBlogCells((prevBlogCells) => [
      ...prevBlogCells,
      {
        id:
          prevBlogCells.length > 0
            ? Math.max(...prevBlogCells.map((cell) => cell.id)) + 1
            : 1,
        title: '',
        content: '',
        image: '',
      },
    ]);
  };
  const deleteBlogCell = (id) => {
    if (blogCells.length === 1) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Você precisa de ao menos uma célula!',
      });
      return;
    }

    Swal.fire({
      title: 'Tem certeza?',
      text: 'Você não poderá reverter isso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        setBlogCells((prevBlogCells) =>
          prevBlogCells.filter((cell) => cell.id !== id),
        );
        Swal.fire({
          title: 'Deletado!',
          icon: 'success',
        });
      }
    });
  };

  //Reference Logic
  const addReference = (newReference) => {
    if (referenceText.length < 3) return;
    setReferences([...references, newReference]);
    setReferenceText('');
  };
  const removeReference = (indexToRemove) => {
    setReferences(references.filter((_, index) => index !== indexToRemove));
  };

  //Submit Logic
  const userPost = (data) => {
    //title and description
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('subTitle', data.description);
    formData.append('category', 'Projeto');

    //blogcell images
    blogCells.forEach((cell) => {
      if (cell.image) {
        formData.append('image', cell.image);
      } else {
        formData.append('image', 'Projeto');
      }
    });

    //blogcell content
    const blogPosts = blogCells.map((cell) => {
      return {
        title: cell.title,
        content: cell.content,
      };
    });
    const blogPostsJson = JSON.stringify(blogPosts);
    formData.append('posts', blogPostsJson);

    //console.log(formData);
    addBlog(formData);
  };

  return (
    <>
      <form
        className="container-xxl conteudo-xxl mt-5 py-5 px-0 form-blog"
        onSubmit={handleSubmit(userPost)}
      >
        <section hidden={!blogPreviwOn}>
          <BlogPreview
            blogCells={blogCells}
            title={blogTitle}
            description={blogDescription}
          />
        </section>
        <section hidden={blogPreviwOn}>
          <div className="blog-header text-center">
            <label className="fs-1" htmlFor="titulo">
              Título
            </label>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: {
                  value:
                    /^[A-Za-z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ.,;:!? ]+$/i,
                  message: 'Apenas letras, números e pontuações são permitidos',
                },
              }}
              render={({ field }) => (
                <input
                  type="text"
                  className="titulo-blog"
                  id="titulo"
                  onChange={(e) => {
                    field.onChange(e);
                    setBlogTitle(e.target.value);
                  }}
                  value={blogTitle}
                />
              )}
            />
          </div>

          <BlogCellsTransitionGroup
            blogCells={blogCells}
            addBlogCell={addBlogCell}
            deleteBlogCell={deleteBlogCell}
            updateCellTitle={updateBlogCellTitle}
            updateCellContent={updateBlogCellContent}
            updateCellImage={updateBlogCellImage}
          />
        </section>
        <aside>
          <button
            type="button"
            className="rounded-edge w-100 mb-3"
            onClick={() => setBlogPreviewOn(!blogPreviwOn)}
          >
            {blogPreviwOn ? 'Voltar para Edição' : 'Visualizar'}
          </button>
          <div className="blog-head-container blog-card">
            QUAL CATEGORIA SEU PROJETO SE ENCAIXA?
          </div>
          <button
            type="submit"
            className="rounded-edge w-100 mb-3"
            disabled={false}
          >
            {isAdding ? '...' : 'Publicar'}
          </button>
          <h2>Descricao</h2>
          <div className="blog-description-container blog-card">
            <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: {
                  value:
                    /^[A-Za-z0-9áàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ.,;:!? ]+$/i,
                  message: 'Apenas letras, números e pontuações são permitidos',
                },
              }}
              render={({ field }) => (
                <textarea
                  className="lined-input"
                  onChange={(e) => {
                    field.onChange(e);
                    setBlogDescription(e.target.value);
                  }}
                  value={blogDescription}
                ></textarea>
              )}
            />
          </div>
          <h2>Referencias</h2>
          <div className="blog-reference-container blog-card">
            <div className="reference-input d-flex flex-column">
              <textarea
                className="lined-input"
                style={{ height: '6em' }}
                value={referenceText}
                onChange={(e) => setReferenceText(e.target.value)}
              ></textarea>
              <button
                className="simple-button"
                type="button"
                onClick={() => addReference(referenceText)}
              >
                Adicionar
              </button>

              {referenceText.length > 0 && referenceText.length < 3 && (
                <span className="text-danger">
                  A referência deve conter no mínimo 3 caracteres.
                </span>
              )}
            </div>
            {references.length === 0 ? (
              <p className="fs-4 d-block">Adicione aqui suas referências</p>
            ) : (
              <ul className="d-flex flex-column p-0 reference-list">
                {references.map((reference, index) => (
                  <li key={index}>
                    <span>{reference}</span>
                    <button
                      type="button"
                      onClick={() => removeReference(index)}
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </form>
    </>
  );
};

export default NewPost;
