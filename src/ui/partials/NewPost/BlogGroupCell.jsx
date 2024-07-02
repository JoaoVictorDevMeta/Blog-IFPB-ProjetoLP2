import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BlogCell } from './BlogCell';
import { CiCirclePlus } from 'react-icons/ci';

const BlogCellsTransitionGroup = ({
  blogCells,
  setBlogCells,
  addBlogCell,
  deleteBlogCell,
  updateCellTitle, // functions to update the cells objects array
  updateCellContent,
  updateCellImage,
}) => {
  return (
    <TransitionGroup component="ul" className="blog-partials p-0">
      {blogCells.map((cell) => (
        <CSSTransition key={cell.id} timeout={500} classNames="blog-cell">
          <li className="blog-cell">
            <BlogCell
              cell={cell}
              onDelete={() => deleteBlogCell(blogCells, setBlogCells, cell.id)}
              updateTitle={(newTitle) => updateCellTitle(blogCells, setBlogCells, cell.id, newTitle)}
              updateContent={(newContent) =>
                updateCellContent(blogCells, setBlogCells, cell.id, newContent)
              }
              updateImage={(newImage) => updateCellImage(blogCells, setBlogCells, cell.id, newImage)}
            />
          </li>
        </CSSTransition>
      ))}
      <li>
        <button className="blog-button" type="button" onClick={() => {addBlogCell(blogCells, setBlogCells,)}}>
          <CiCirclePlus className="blog-button-icon" />
          Adicionar Célula
        </button>
      </li>
    </TransitionGroup>
  );
};

export default BlogCellsTransitionGroup;
