import React, { useEffect, useContext, useState } from 'react';
import { Button, Icon } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import queryString from 'query-string';

import { BASE_URL } from '../../services/constants'
import { TokenContext } from '../../contexts/token-context';

import './Login.css';

const Login = ({ location, history }) => {
    const [showProgressBar, setShowProgressBar] = useState(false);
    const { token, setToken } = useContext(TokenContext)

    useEffect(() => {
        const queryParams = queryString.parse(location.search);

        if (queryParams.code) {
            setShowProgressBar(true);
            // const token = await fetch(`${BASE_URL}/mocks/token`, {
            //     method: "POST",

            //     headers: {
            //         "Access-Control-Allow-Origin": "*",
            //         "Content-Type": "application/json",
            //     },
            //     body: { code: queryParams.code },
            // }).then(res => res.json());
            setTimeout(() => {
                setShowProgressBar(false)
                console.log(token);
                console.log(setToken('vasile'));
                history.push('/topics')
            }, 8000);
        }
    }, [location]);

    const handleLogin = async () => {
        try {
            setShowProgressBar(true);
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
            <div className={'content'}>
                <div>
                    <h1>Welcome to E.ON</h1>
                    <p>This is an application for filling timesheets (Chronos).</p>
                </div>
                <div>
                    <Button className={'login-button'} variant="contained" size="large" color="default" onClick={handleLogin}>
                        Login
                    <Icon>fingerprint</Icon>
                    </Button>

                </div>
            </div>
            {showProgressBar && <LinearProgress />}
        </div>
    );
}

export default Login;