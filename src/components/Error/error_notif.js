import React from 'react';
import {Alert} from 'react-bootstrap';

const ErrorNotif = ({errors}) => {
    console.log(errors)
    if (errors) {
        return (
            <Alert
                bsClass="alert"
                bsStyle="danger">
                {errors.message}          
            </Alert>
        );
    }
    else {
        return (
            <Alert
                bsClass="alert"
                bsStyle="danger">
                poops           
            </Alert>
            );
    }
}

export default ErrorNotif