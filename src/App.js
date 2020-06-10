import React from 'react';
import './App.css';
import Learning from './Learning';
import CodingChallenges from './CodingChallenges'
import Documentation from './Documentation'

function App() {
  return (
    <div className="App">
      <Learning />
      <Documentation />
      <CodingChallenges />
    </div>
  );
}

export default App;
