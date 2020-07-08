import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Dashboard = lazy(() => import("../dashboard"));

function RouterAP() {
    return (
        <Router>
            <Switch>
                <Route exact path="/admin">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
}
export default RouterAP;
