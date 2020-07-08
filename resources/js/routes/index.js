import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Auth from "../modules/Auth/components/auth";
import IndexAP from "../modules/AP-client/components/index";

function RouterIndex() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Auth />
                </Route>
                <Route path="/admin">
                    <IndexAP />
                </Route>
            </Switch>
        </Router>
    );
}
