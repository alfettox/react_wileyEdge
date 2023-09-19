// App.js

import React from 'react';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import SuggestedReads from './components/SuggestedReads';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <BlogPost />
      <SuggestedReads />
      <Footer />
    </div>
  );
}

export default App;
