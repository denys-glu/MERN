import React from 'react';

const NavWrapper = ({ param }) => {
    console.log(param)
    let num = true;
    if(isNaN(param)) {
        num = false;
    }

    return (
        <div>
            {
            num ?
                <p>This num rout param is = { param }</p> :
                <p>This string rout param is = { param }</p>
            }
        </div>
    );
}

export default NavWrapper;