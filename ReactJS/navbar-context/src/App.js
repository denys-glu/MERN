import React, { useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper'
import FormWrapper from './components/FormWrapper'
import Navbar from './components/Navbar'
import MyContext from './components/MyContext';

function App() {
  const [myObj, setMyObj] = useState({
    name: ""
  });
  return (
    <div className="App">
      <MyContext.Provider value={{myObj, setMyObj}}>
        <Wrapper>
            <Navbar/>
            <FormWrapper/>
        </Wrapper>
      </MyContext.Provider>
    </div>
  );
}

export default App;
