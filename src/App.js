import React from 'react';
import Lottery from './Lottery';

import './App.css';




function App() {
  return (
    <div className="App">
       <Lottery maxPicks={3} />
       <Lottery range={10} />
    </div>
  );
}

export default App;
