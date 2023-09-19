// Article.js

import React from 'react';

function Article({ blogImage, blogTitle, blogDescription, blogLink }) {
  return (
    <article className="w-1/3 min-w-min m-8 flex flex-col shadow-xl rounded-lg">
      <div className="w-full h-2/5 overflow-hidden rounded-t-lg relative">
        <img className="object-cover w-full" src={blogImage} alt="Article thumbnail" />
      </div>
      <div className="w-full flex flex-col p-4 self-end">
        <h3 className="text-2xl font-bold p-2 capitalize">{blogTitle}</h3>
        <p className="p-2 text-gray-600">{blogDescription}</p>
        <a
          className="my-2 mt-8 py-2 text-white text-center font-semibold bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 rounded-xl"
          href={blogLink}
        >
          Read more
        </a>
      </div>
    </article>
  );
}

export default Article;
