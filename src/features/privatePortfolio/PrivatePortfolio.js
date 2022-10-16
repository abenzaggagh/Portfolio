import {Route, Switch} from "react-router-dom";
import React from "react";
import BackOffice from "./backoffice/BackOffice";
import Secret from "./secret/Secret";

export default function PrivatePortfolio() {

    return (
        <Switch>
            <Route exact path="/">
                <BackOffice />
            </Route>
            <Route exact path="/back-office">
                <BackOffice />
            </Route>
            <Route path="/secret">
                <Secret />
            </Route>
        </Switch>);
}