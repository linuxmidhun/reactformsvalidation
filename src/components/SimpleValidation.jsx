import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const SimpleValidation = () => {
    const [submitted, setSubmitted] = useState(false);
    const [inputValues, setInputValue] = useState({
        fName: "",
        lName: "",
    });
    const [validation, setValidation] = useState({
        fName: "",
        lName: "",
    });

    //handle submit updates
    function handleChange(event) {
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
    }

    const checkValidation = () => {
        let errors = validation;

        //first Name validation
        if (!inputValues.fName.trim()) {
            errors.fName = "First name is required";
        } else {
            errors.fName = "";
        }
        //last Name validation
        if (!inputValues.lName.trim()) {
            errors.lName = "Last name is required";
        } else {
            errors.lName = "";
        }
        setValidation(errors);
    }

    useEffect(() => {
        checkValidation();
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };
    return (
        <div>
            <form
                id="registrationForm"
                // action="/"
                // method="POST"
                onSubmit={handleSubmit}
            >
                <TextField id="outlined-basic" label="First Name"
                    name="fName" variant="outlined"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.fName} /><br />
                {(validation.fName && submitted) && <p>{validation.fName}</p>}
                <br />
                <TextField id="outlined-basic" label="Last Name"
                    name="lName" variant="outlined"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.lName} /><br />
                {(validation.lName && submitted) && <p>{validation.lName}</p>}
                <br />
                <Button type="submit" variant="contained"
                >Save</Button>
            </form>
        </div >
    )
}

export default SimpleValidation