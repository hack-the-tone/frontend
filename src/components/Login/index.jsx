import React, { useEffect, useContext } from 'react';
import { Button, Icon } from '@material-ui/core';
import queryString from 'query-string'

import { BASE_URL } from '../../services/constants'
import { TokenContext } from '../../contexts/token-context';

import './Login.css';

const Login = ({ location, history }) => {
    const { token, setToken } = useContext(TokenContext)

    useEffect(() => {
        const queryParams = queryString.parse(location.search);

        if (queryParams.code) {
            // const token = await fetch(`${BASE_URL}/mocks/token`, {
            //     method: "POST",

            //     headers: {
            //         "Access-Control-Allow-Origin": "*",
            //         "Content-Type": "application/json",
            //     },
            //     body: { code: queryParams.code },
            // }).then(res => res.json());
            console.log(token);
            console.log(setToken('vasile'));
            history.push('/topics')
        }
    }, [location]);

    const handleLogin = async () => {
        try {
            const signInURI = await fetch(`${BASE_URL}/mocks/sign-in-uri`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                },
            }).then(res => res.json())

            window.open(signInURI.responseUri, '_self');
        } catch (error) {
            console.warn(error);
        }
    };

    return (
        <div className={'login'}>
        
            <Button className={'login-button'} variant="contained" size="large" color="default" onClick={handleLogin}>
                Login
                <Icon >fingerprint</Icon>
            </Button>
        </div>
    );
}

export default Login;