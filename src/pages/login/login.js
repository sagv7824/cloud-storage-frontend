import MultiInputs from "../../components/multiInputs/multiInputs"
import './login.css';
import ErrorIcon from '@mui/icons-material/Error';
import React from "react";
import {red} from '@mui/material/colors';
import { display } from "@mui/system";

function handleSubmit(state) {
    console.log(state);
    if(!state.email || state.email === "") {
        return "email is required";
    }else if(!state.password || state.password === "") {
        return "password is required";
    }else {
        return null;
    }
}

export default function Login() {
    const [error,setError] = React.useState(null);
    React.useEffect(() => {console.log(error)},[error]);
    return (
        <div className="login-info-container">
            <MultiInputs elements=
                {[
                {inputId: "email", labelText:"email address: "},
                {inputId: "password", labelText: "password: ", inputType: "password"}
                ]}
                validate={(inputState) => { setError(handleSubmit(inputState));}}
            />
            {error ? <div className="error-div"><ErrorIcon sx={{ color: red[500]}}/><span className="error-text">{error}</span></div> : null}
        </div>
    );
}