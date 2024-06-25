import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import InputField from '../../components/inputs/Input';
import Button from '../../components/buttons/Button';

export const BlogCell = ({
  cell,
  onDelete,
  updateTitle,
  updateContent,
  updateImage,
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(
    'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg',
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        updateImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    onDelete(cell.id);
  };

  return (
    <div className="cell-container">
      <h2>Célula {cell.id}</h2>
      <div className="image-input-container">
        <img src={image} alt="" className="image-display" />
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>
      <div className="cell-input">
        <label htmlFor="">Título da célula</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            updateTitle(e.target.value);
          }}
        />
      </div>
      <div className="cell-input">
        <label htmlFor="">Contéudo da célula</label>
        <ReactQuill
          value={content}
          onChange={(value) => {
            setContent(value);
            updateContent(value);
          }}
          modules={{
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'], // toggled buttons
              ['blockquote', 'code-block'],
              [{ header: 1 }, { header: 2 }], // custom button values
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ align: [] }],
              ['clean'], // remove formatting button
            ],
          }}
        />
      </div>
      <button type="button" className="simple-button" onClick={handleDelete}>
        Deletar célula
      </button>
    </div>
  );
};
