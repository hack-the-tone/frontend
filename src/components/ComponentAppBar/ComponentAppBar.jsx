import React, { useEffect, useState, useContext } from 'react';
import { Link, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, LinearProgress } from '@material-ui/core';

import eonLogo from '../../assets/eon.png';
import { TokenContext } from '../../contexts/token-context';

import './ComponentAppBar.css';


function ComponentAppBar({ children }) {
  const [showProgressBar, setShowProgressBar] = useState(false);
  const { token } = useContext(TokenContext);

  const getUser = () => {
    // setShowProgressBar(true);
  }

  useEffect(() => {
    getUser();
  })

  return !token ? null : (
    <div className={'eon-page'} >
      <AppBar position="static">
        <Toolbar className={'componentAppbar'}>
          <Link to="/">
            <img src={eonLogo} alt="Eon" height="45" className="img-logo" />
          </Link>

          <div className="profile-card">
            <Typography variant="h5" color="inherit" className="eon-title eon-red">
              Hello
            </Typography>
            {/* <TopMenu userData={this.state.userData} /> */}
          </div>
        </Toolbar>
      </AppBar>

      {showProgressBar && <LinearProgress />}
      {children}
    </div>
  );
}

export default ComponentAppBar