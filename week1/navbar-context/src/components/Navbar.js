import React, { useContext } from 'react';
import MyContext from './MyContext';

const Navbar = () => {
    const context = useContext(MyContext)
    return (
        <>
        <h1>Hello</h1>
        <p>
            {context.myObj.name}
        </p>
        </>
    )
}

export default Navbar;