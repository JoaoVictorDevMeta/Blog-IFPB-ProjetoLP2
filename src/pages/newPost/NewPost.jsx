import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import './NewPost.css';
import Swal from 'sweetalert2';
import InputField from '../../ui/components/inputs/Input';
import Button from '../../ui/components/buttons/Button';

import BlogCellsTransitionGroup from '../../ui/partials/NewPost/BlogGroupCell';

const NewPost = () => {
  const [blogCells, setBlogCells] = useState([
    { id: 1, title: '', content: '', image: '' },
  ]);
  const [referenceText, setReferenceText] = useState('');
  const [references, setReferences] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  //BlogCell Logic
  const addBlogCell = () => {
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
  const userPost = async (data) => {
    console.log(data);
    console.log(blogCells);
  };

  return (
    <>
      <form
        className="container-xxl conteudo-xxl mt-5 py-5 px-0 form-blog"
        onSubmit={handleSubmit(userPost)}
      >
        <section>
          <div className="blog-header text-center">
            <h2>Título</h2>
            <InputField
              label=""
              type="text"
              id="title"
              placeholder=""
              className=" py-2 px-3 fs-5"
              registerOptions={register('title', {
                required: true,
                pattern: {
                  value: /^[A-Za-z0-9]+$/i,
                  message: 'Apenas letras e números são permitidos',
                },
              })}
              errors={errors?.title}
            />
          </div>

          <BlogCellsTransitionGroup
            blogCells={blogCells}
            addBlogCell={addBlogCell}
            deleteBlogCell={deleteBlogCell}
          />
        </section>
        <aside>
          <div className="blog-head-container blog-card">a</div>
          <button
            type="submit"
            className="rounded-edge w-100 mb-3"
            disabled={false}
          >
            Publicar
          </button>
          <h2>Descricao</h2>
          <div className="blog-description-container blog-card">
            <textarea
              className="lined-input"
              {...register('description', {
                required: true,
                pattern: {
                  value: /^[A-Za-z0-9]+$/i,
                  message: 'Apenas letras e números são permitidos',
                },
              })}
            ></textarea>
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
