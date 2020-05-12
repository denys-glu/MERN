import React from 'react';

const Complicated = ({word, textColor, bgColor}) => {
    const styles = {
        backgroundColor: bgColor,
        color: textColor,
        minHeight: "500px"
    }

    return (
        <>
            <div style={styles} >{ word }</div>
        </>
    )
}

export default Complicated;