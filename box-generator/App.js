import React, {useState} from 'react';
import './App.css';
import Box from './components/Box/Box';
import { cleanup } from '@testing-library/react';


function App() {
  const [color, setColor] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [colors, setColors] = useState([]);
  
  const form = e => {
    e.preventDefault()
    setColors([...colors, {
      color : e.target.color.value, 
      height : e.target.height.value,
      width : e.target.width.value
    }])
    cleanUpForm()
  }

  function cleanUpForm(){
    setColor("")
    setHeight("")
    setWidth("")
  }


  return (
    <div className="App">
      <form onSubmit={form}>
        <div>
          <label htmlFor="color">Color: </label>
          <input type="text" name="color" onChange={ e => setColor(e.target.value)} value={color}/>
        </div>
        <div>
          <label htmlFor="width">Width: </label>
          <input type="text" name="width" onChange={ e => setWidth(e.target.value)} value={width}/>
        </div>
        <div>
          <label htmlFor = "height">Height: </label>
          <input type="text" name="height" onChange={ e => setHeight(e.target.value)} value={height}/>
        </div>
        <button type="submit">Add Color</button>

      </form>
        {
            colors.map( (item, i) => 
                <Box params = { item } key = {i}/>
            )
        }

    </div>
  );
}

export default App;
