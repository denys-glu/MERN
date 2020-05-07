import React, { useState } from 'react';
import styles from './HookFormComponent.module.css';

const HookForm = (props) => {
    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [userEmail, setUserEmal] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const addUser = (e) => {
        e.preventDefault();
        const newUser = { userName, userEmail, userPassword }
        console.log("addUser -> newUser", newUser)
        setHasBeenSubmitted( true )
    }

    const formMessage = () => {
        if ( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    }

    const handleName = (e) => {
        setUserName(e.target.value)
        if(e.target.value.length === 0) {
            setUserNameError("");
        } else if (e.target.value.length < 2) {
            setUserNameError("Title is required!");
        } else {
            setUserNameError("");
        }
    }

    return (
        <div className={styles.formComponent}>
            <h3>{ formMessage() }</h3>
            <form onSubmit={ addUser }>
                <div>
                    {
                    userNameError ?
                        <div style={{color:'red'}}>{ userNameError }</div> :
                        ''
                    }
                    <label>Username: </label> 
                    <input type="text" onChange={ handleName } value={userName}/>
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ (e) => setUserEmal(e.target.value) } value={userEmail}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ (e) => setUserPassword(e.target.value) } value={userPassword}/>
                </div>
                <div>
                    <label>Password Confirm: </label>
                    <input type="password" onChange={ (e) => setUserPasswordConfirm(e.target.value) } value={userPasswordConfirm}/>
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <ul>
                    <li>User Name: {userName}</li>
                    <li>User Email: {userEmail}</li>
                    <li>User Password: {userPassword}</li>
                </ul>
            </div>

        </div>
    )
}

export default HookForm;