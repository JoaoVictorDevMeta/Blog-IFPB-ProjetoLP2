import React from 'react';

export const BlogErrors = ({ errors, cellErrors }) => {
  //console.log(cellErrors);
  return (
    <div>
      <ul className='blog-errors'>
        {Object.keys(errors).map((fieldName, index) => (
          <li key={index}>{errors[fieldName].message}</li>
        ))}
        {cellErrors?.map((error, index) => {
          return (
            <React.Fragment key={index}>
              {error.title !== '' && <li>Célula {error.id}: {error.title}</li>}
              {error.content !== '' && <li>Célula {error.id}: {error.content}</li>}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};
