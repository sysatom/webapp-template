import React from 'react';
import './App.sass';
import {Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={`example/1`}>Example</Link>
      </header>
    </div>
  );
}

export default App;
