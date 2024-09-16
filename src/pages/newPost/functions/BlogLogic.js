import Swal from 'sweetalert2';

//blog logic separated, this make easier to look at the code
export const updateBlogCellTitle = (blogCells, setBlogCells, id, newTitle) => {
  setBlogCells(
    blogCells.map((cell) =>
      cell.id === id ? { ...cell, title: newTitle } : cell,
    ),
  );
};

export const updateBlogCellContent = (blogCells, setBlogCells, id, newContent) => {
  setBlogCells(
    blogCells.map((cell) =>
      cell.id === id ? { ...cell, content: newContent } : cell,
    ),
  );
};

export const updateBlogCellImage = (blogCells, setBlogCells, id, newImage) => {
  setBlogCells(
    blogCells.map((cell) =>
      cell.id === id ? { ...cell, image: newImage } : cell,
    ),
  );
};

export const addBlogCell = (blogCells, setBlogCells) => {
  if (blogCells.length >= 8) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você atingiu o limite de células!',
    });
  }
  setBlogCells((prevBlogCells) => [
    ...prevBlogCells,
    {
      id: prevBlogCells.length > 0 ? Math.max(...prevBlogCells.map((cell) => cell.id)) + 1 : 1,
      title: '',
      content: '',
      image: '',
    },
  ]);
};

export const deleteBlogCell = (blogCells, setBlogCells, id) => {
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