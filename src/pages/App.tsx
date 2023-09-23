import React from 'react';
import './App.sass';
import {Link} from "react-router-dom";
import {Button} from "@chakra-ui/react";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={`example/1`}>
          <Button colorScheme='blue' size='lg'>Example</Button>
        </Link>
        <Link to={`form`}>
          <Button colorScheme='green' size='lg'>Form</Button>
        </Link>
        <Link to={`day`}>
          <Button colorScheme='gray' size='lg'>Day</Button>
        </Link>
      </header>
    </div>
  );
}

export default App;
