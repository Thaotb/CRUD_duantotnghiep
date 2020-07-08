import React,{lazy, Suspense} from 'react';

const ResetPassword=lazy(()=> import ('../reset-password'));
const ForgotPassword=lazy(()=> import ('../forgot-password'));
const Login =lazy(()=> import ('../login'));

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function RouterAuth(){
    return(
        <Router> 
            <Switch>
                <Route exact path="/">
                <Login />
                </Route>
                <Route exact path="/resetpassword">
                <ResetPassword />
                </Route>
                <Route exact path="/forgotpassword">
                <ForgotPassword />
                </Route>
            </Switch>
        </Router>
    )
}
export default RouterAuth;