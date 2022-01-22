import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {CssBaseline} from '@material-ui/core';
import Login from '../components/Login';
import Register from '../components/register';
import Conversacion from '../components/conversacion';


function Routes() {
  return (
    <div>
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/conversacion" component={Conversacion}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default Routes;