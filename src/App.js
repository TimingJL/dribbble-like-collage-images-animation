import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import GithubCorner from 'react-github-corner';
import CollageImages from 'containers/CollageImages';

function App() {
  return (
    <main>
      <CollageImages />
      <GithubCorner href="https://github.com/TimingJL/dribbble-like-collage-images-animation" />
    </main>
  );
}

export default App;
