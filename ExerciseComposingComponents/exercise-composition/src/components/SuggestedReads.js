import React from 'react';
import blogImage1 from './assets/images/exerciseComponentComposition02.jpg';
import blogImage2 from './assets/images/exerciseComponentComposition03.jpg';

function SuggestedReads() {
  return (
    <section className="overflow-hidden bg-purple-50">
      {/* ... */}
      <article className="w-1/3 min-w-min m-8 flex flex-col shadow-xl rounded-lg">
        <div className="w-full h-2/5 overflow-hidden rounded-t-lg relative">
          <img className="object-cover w-full" src={blogImage1} alt="man in the wild" />
        </div>
        {/* ... */}
      </article>
      <article className="w-1/3 min-w-min m-8 flex flex-col shadow-xl rounded-lg relative">
        <div className="w-full h-2/5 overflow-hidden rounded-t-lg relative">
          <img className="object-cover w-full" src={blogImage2} alt="man in the wild" />
        </div>
        {/* ... */}
      </article>
      {/* ... */}
    </section>
  );
}

export default SuggestedReads;
