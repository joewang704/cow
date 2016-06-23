import React from 'react'
import { Notification } from 'react-notification';

const ErrorNotif = ({errors}) => {
    console.log(errors)
    if (errors) {
        return (
            <Notification
                isActive={true}
                message={errors.message}
                action={'Dismiss'}
                dismissAfter={5}
            />
        );
    } else {
        return <div></div>
    }
}

export default ErrorNotif