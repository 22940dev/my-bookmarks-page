import React from 'react';
import './App.css';
import Learning from './Learning';
import CodingChallenges from './CodingChallenges'
import Documentation from './Documentation'
import Color from './Color'
import Image from './Image'
import Icon from './Icon'
import Homebar from './Homebar'
import Css from './Css'


function App() {
  return (
    <div className="App">
      <Homebar />
      <Documentation />
      <CodingChallenges />
      <Learning />
      <Color />
      <Image />
      <Icon />
      <Css />
    </div>
  );
}

export default App;
