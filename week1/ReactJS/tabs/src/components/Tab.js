import React, {useState} from "react";

const Tab = ({tabs, setContent}) => {
    
    const tabClick = (e, item) => {
        setContent({
            content: item.content,
            color: item.color
        });
        console.log(item);
    }
    return(
        <ul>
            {
                tabs.map( (item, i) => 
                    <li onClick={ (e) => tabClick(e, item) } style={{ display:"inline" }} key = {i}> {item.label} </li>
                )
            }
        </ul>
    )
};

export default Tab;