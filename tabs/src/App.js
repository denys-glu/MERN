import React, { useState } from 'react';
import './App.css';
import TabDisplay  from "./components/TabDisplay";
import Tab from "./components/Tab";
// import "./components/Tabs.module.css";

function App(){
  const [content, setContent] = useState({});
  const Tabs = [
    {
      label : "Tab 1",
      content : "Tab 1 content shows here",
      color: "blue"
    },
    {
      label : "Tab 2",
      content : "Tab 2 content shows here",
      color: "green"
    },
    {
      label : "Tab 3",
      content : "Tab 3 content shows here",
      color: "yellow"
    }
  ]


  return (
    <div className="App">
      <Tab tabs= {Tabs} setContent = {setContent}/>
      <TabDisplay data = {content}/>
    </div>
  );
}


export default App;