import React, { useReducer } from 'react';


const Form = (props) => {
    
    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    };
    function reducer(state, action) {
        return {
            ...state,
            [action.type]: action.payload
        };
    }
    const [state, dispatch] = useReducer(reducer, initialState);
 
    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    function loginUser(e) {
        e.preventDefault();
        console.log("event: ", e)
    }

    return (
        <div>
            {JSON.stringify(state)}
            <form onSubmit={ loginUser }>
                <div>
                    {state.firstName.error !== null && (
                        <p className="error">{state.firstName.error}</p>
                    )}
                    <label>First Name: </label> 
                    <input type="text" name="firstName" onChange={handleChange} value={ state.firstName.value }/>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={handleChange} value={ state.lastName.value }/>
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" name="email" onChange={handleChange} value={ state.email.value }/>
                </div>

                <input type="submit" value="Login" />
            </form>
        </div>
    )

}

export default Form;