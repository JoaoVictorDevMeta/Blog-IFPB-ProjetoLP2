import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BlogCell } from './BlogCell';
import { CiCirclePlus } from 'react-icons/ci';

const BlogCellsTransitionGroup = ({
  blogCells,
  addBlogCell,
  deleteBlogCell,
}) => {
  return (
    <TransitionGroup component="ul" className="blog-partials p-0">
      {blogCells.map((cell) => (
        <CSSTransition key={cell.id} timeout={500} classNames="blog-cell">
          <li className="blog-cell">
            <BlogCell cell={cell} onDelete={() => deleteBlogCell(cell.id)} />
          </li>
        </CSSTransition>
      ))}
      <li>
        <button className="blog-button" type="button" onClick={addBlogCell}>
          <CiCirclePlus className="blog-button-icon" />
          Adicionar Célula
        </button>
      </li>
    </TransitionGroup>
  );
};

export default BlogCellsTransitionGroup;
