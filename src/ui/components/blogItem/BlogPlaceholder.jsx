import React from 'react';

const BlogPlaceholder = () => {
  return (
    <div className="result d-flex flex-wrap mb-4">
      <div className="image">
        <img src="" alt="" className="rounded" />
        <div className="category py-2 px-3">
          <span className="">.</span>
        </div>
      </div>
      <div className="text placeholder-glow">
        <span className="placeholder col-10 fs-4 "></span>
        <p className="d-flex flex-column pt-4">
          <span className="placeholder col-6 fs-4 mb-2"></span>
          <span className="placeholder col-8 fs-4 mb-2"></span>
          <span className="placeholder col-4 fs-4 mb-2"></span>
        </p>
      </div>
    </div>
  );
};

export default BlogPlaceholder;
