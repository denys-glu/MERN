import React, {useState} from 'react';
import './App.css';
import Box from './components/Box/Box';


function App() {
  const [color, setColor] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [colors, setColors] = useState([]);
  
  const form = e => {
    e.preventDefault()
    const array = [...colors]
    array.push({
      color : e.target.color.value, 
      height : e.target.height.value,
      width : e.target.width.value
    })
    setColors(array)
    setColor("")
    console.log(colors)
    console.log(e.target.color.value)
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
          <input type="text" name="width"/>
        </div>
        <div>
          <label htmlFor = "height">Height: </label>
          <input type="text" name="height"/>
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
