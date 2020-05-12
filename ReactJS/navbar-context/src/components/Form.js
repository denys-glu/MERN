import React, { useState, useContext } from 'react';
import MyContext from './MyContext';

const Form = () => {
    const context = useContext(MyContext)
    // console.log("Form -> context", context.myObj)

    const [firstName, setFirstName] = useState("")

    const firstNameHandler = val => {
        setFirstName(val)
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        context.setMyObj({name: firstName})
        console.log(e)
    }

    return (
        <>
        <form onSubmit={ submitHandler }>
            <label htmlFor="firstName">First Name: </label>
            <input id="firstName" type="text" onChange={ e => firstNameHandler(e.target.value) } value={ firstName }/>
            <button type="submit">Change</button>
        </form>
        </>
    )
}

export default Form