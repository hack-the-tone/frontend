import React from 'react';

const Login = ({ location }) => {
    return (
        <div>
            <h1> Buna baietii</h1>
            {location.pathname}
        </div>
    );
}

export default Login;