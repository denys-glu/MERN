import React from 'react';
// import "./Tabs.module.css";

const TabDisplay = (props) => {
console.log("TabDisplay -> content, color", props)
    
    return ( 
        <div > 
            <div style ={{ backgroundColor: props.data.color}}>
                {
                    props.data.content
                } 

            </div>
        </div>
    )
};


export default TabDisplay;