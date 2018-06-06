import React, { Component } from 'react';


import Header from './components/Header';
import Footer from './components/Footer';
import PostsOverview from './components/PostsOverview';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        
        <PostsOverview />
        <Footer />
      </div>
    );
  }
}

export default App;