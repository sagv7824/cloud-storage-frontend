import React from 'react';
import './multiInputs.css';

export default function MultiInputs(props) {
    const formElements = [];
    const [state,setState] = React.useState({});
    // React.useEffect(() => {setState({})}, []);
    props.elements.forEach(element => {
        formElements.push(<label className="input-label" for={element.inputId}>{element.labelText}</label>);
        formElements.push(<br/>);
        formElements.push(<input type={element.inputType ? element.inputType : "text"} id={element.inputId} 
                                className="text-input" 
                            onBlur={(e) => {state[element.inputId] = e.target.value; setState(state);}}/>);
        formElements.push(<br/>);
    });

    return (
            <div className="form-div">
                {formElements}
                <br/>
                <button type="submit" value="Submit" onClick={() => props.validate(state)}>Submit</button>
            </div>
    );
}