import React, { useEffect, useContext, useState } from 'react';
import { Button, Icon } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import queryString from 'query-string';

import { BASE_URL } from '../../services/constants'
import { TokenContext } from '../../contexts/token-context';

import './Login.css';

const Login = ({ location, history }) => {
  const [showProgressBar, setShowProgressBar] = useState(false);
  const { setToken } = useContext(TokenContext);

  const getToken = async (queryParams) => {
    try {
      const response = await fetch(`${BASE_URL}/mocks/token`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: queryParams.code })
      }).then(res => res.json());

      return JSON.parse(JSON.parse(response.body).message);
    } catch (err) {
      console.warn(err);
      setShowProgressBar(false);
    }
  }

  useEffect(() => {
    const queryParams = queryString.parse(location.search);

    if (queryParams.code) {
      setShowProgressBar(true);
      getToken(queryParams).then(token => {
        setShowProgressBar(false);

        if (token.access_token) {
          setToken(token.access_token)
          history.push('/dashboard')
        }
      });
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
      setShowProgressBar(false);
    }
  };

  return (
    <div className={'login eon-page'}>
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