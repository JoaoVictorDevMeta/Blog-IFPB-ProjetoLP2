import React from 'react';

export const BlogErrors = ({ errors, cellErrors }) => {
  //console.log(cellErrors);
  return (
    <div>
      <ul>
        {Object.keys(errors).map((fieldName, index) => (
          <li key={index}>{errors[fieldName].message}</li>
        ))}
        {cellErrors?.map((error, index) => {
          return (
            <>
              {error.title !== '' && <li key={index}>Célula {error.id}: {error.title}</li>}
              {error.content !== '' && <li key={index}>Célula {error.id}: {error.content}</li>}
            </>
          );
        })}
      </ul>
    </div>
  );
};
