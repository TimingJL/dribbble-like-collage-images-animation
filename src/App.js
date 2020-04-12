import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import GithubCorner from 'react-github-corner';
import CollageImagesPage from 'containers/CollageImagesPage';

function App() {
  return (
    <>
      <CollageImagesPage />
      <GithubCorner href="https://github.com/TimingJL/dribbble-like-collage-images-animation" />
    </>
  );
}

export default App;
