import React from "react";

const Box = (props) => {
    const boxStyle = {
        backgroundColor : props.params.color, 
        width :props.params.width + "px",
        height : props.params.height + "px",
        float : "left",
        margin : "10px",

    }
        console.log(props)
    return(
        <div style = {boxStyle}>

        </div>
    );

} 
export default Box;