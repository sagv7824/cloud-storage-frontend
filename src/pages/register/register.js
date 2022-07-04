import MultiInputs from "../../components/multiInputs/multiInputs"
import './register.css';
import ErrorIcon from '@mui/icons-material/Error';
import React from "react";
import {red} from '@mui/material/colors';

function handleSubmit(state) {
    console.log(state);
    if(!state.fname || state.fname === "") {
        return "first name is required";
    }else if(!state.lname || state.lname === ""){
        return "last name is required";
    }else if(!state.email || state.email === "") {
        return "email is required";
    }else if(!state.password || state.password === "") {
        return "password is required";
    }else if(state.confirmPassword !== state.password) {
        return "passwords do not match";
    }else {
        return null;
    }
}

export default function Register() {
    const [error,setError] = React.useState(null);
    React.useEffect(() => {console.log(error)},[error]);
    return (
        <div className="register-info-container">
            <MultiInputs elements=
                {[{inputId: "fname", labelText: "first name: "},
                {inputId: "lname", labelText:"last name: "},
                {inputId: "email", labelText: "email address: "},
                {inputId: "password", labelText: "password: ", inputType: "password"},
                {inputId: "confirmPassword", labelText: "confirm password: ", inputType: "password"}]}
                validate={(inputState) => { setError(handleSubmit(inputState));}}
            />
            {error ? <div className="error-div"><ErrorIcon sx={{ color: red[500]}}/><span className="error-text">{error}</span></div> : null}
        </div>
    );
}