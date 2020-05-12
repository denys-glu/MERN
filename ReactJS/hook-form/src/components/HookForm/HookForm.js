import React, { useState } from 'react';
import styles from './HookFormComponent.module.css';

const HookForm = (props) => {
    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState("");

    const [userEmail, setUserEmail] = useState("");
    const [userEmailError, setUserEmailError] = useState("");

    const [userPassword, setUserPassword] = useState("");
    const [userPasswordError, setUserPasswordError] = useState("");

    const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
    const [userPasswordConfirmError, setUserConfirmPasswordError] = useState("");

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

    const handleEmail = (e) => {
        setUserEmail(e.target.value)
        if(e.target.value.length === 0) {
            setUserEmailError("");
        } else if (e.target.value.length < 2) {
            setUserEmailError("Title is required!");
        } else {
            setUserEmailError("");
        }
    }

    const handlePassword = (e) => {
        setUserPassword(e.target.value)
        if(e.target.value.length === 0) {
            setUserPasswordError("");
        } else if (e.target.value.length < 8) {
            setUserPasswordError("At least 8 symbols");
        } else {
            setUserPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setUserPasswordConfirm(e.target.value)
        if(e.target.value.length === 0) {
            setUserConfirmPasswordError("Confirm password is required");
        } else if (e.target.value != userPassword) {
            setUserConfirmPasswordError("Passwords does not match");
        } else {
            setUserConfirmPasswordError("");
        }
    }

    return (
        <div className={styles.formComponent}>
            <h3>{ formMessage() }</h3>
            <form onSubmit={ addUser }>
                <div>
                    {
                    userNameError ?
                        <div style={{ color:'red' }}>{ userNameError }</div> :
                        ''
                    }
                    <label>Username: </label> 
                    <input type="text" onChange={ handleName } value={ userName }/>
                </div>
                <div>
                {
                    userEmailError ?
                        <div style={{ color:'red' }}>{ userEmailError }</div> :
                        ''
                    }
                    <label>Email Address: </label> 
                    <input type="text" onChange={ handleEmail } value={ userEmail }/>
                </div>
                <div>
                {
                    userPasswordError ?
                        <div style={{ color:'red' }}>{ userPasswordError }</div> :
                        ''
                    }
                    <label>Password: </label>
                    <input type="password" onChange={ handlePassword } value={ userPassword }/>
                </div>
                <div>
                {
                    userPasswordConfirmError ?
                        <div style={{ color:'red' }}>{ userPasswordConfirmError }</div> :
                        ''
                    }
                    <label>Password Confirm: </label>
                    <input type="password" onChange={ handleConfirmPassword } value={ userPasswordConfirm }/>
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <ul>
                    <li>User Name: { userName }</li>
                    <li>User Email: { userEmail }</li>
                    <li>User Password: { userPassword }</li>
                </ul>
            </div>

        </div>
    )
}

export default HookForm;