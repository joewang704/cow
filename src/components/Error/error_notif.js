import React from 'react';
import {Alert} from 'react-bootstrap';

const ErrorNotif = ({errors}) => {
    console.log(errors)
    if (errors) {
        return (
            <Alert
                bsClass="alert"
                bsStyle="warning">
                {errors.message}          
            </Alert>
        );
    }
    else {
        return (
            <Alert
                bsClass="alert"
                bsStyle="warning">
                poops           
            </Alert>
            );
    }
}

export default ErrorNotif