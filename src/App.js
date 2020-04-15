import React from 'react';
import Results from './components/Results';
import Search from './components/Search';
import logo from './images/esl-logo-latest.png';
import bgImage from './images/elder-scrolls-bg.jpg';
import './layout.scss';

const App = () => {
  return (
    <div>
      <div id="bg-container">
        <img src={bgImage} alt="Elder Scrolls background wallpaper" />
      </div>
      <div id="app-content">
        <div id="logo"><img src={logo} alt="Elder Scrolls Legends Logo" /></div>
        <Search />
        <Results />
      </div>
    </div>
  );
}

export default App;
