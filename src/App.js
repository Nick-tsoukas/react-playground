import React from 'react';
import './App.css';

import Pokegame from './Pokegame';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <Timer max={100}/>
      <Pokegame />
    </div>
  );
}

export default App;
