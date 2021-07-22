import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

import './App.scss';

import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";
import Overlay from "./shared/Overlay/Overlay";

import Home from "./home/Home";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOverlayOpen: false
        }
    }

    render() {
        return (<div className="fluid-container">
                    <Header/>
                    <main>
                        <Home /> 
                    </main>
                    <Overlay /> 
                    <Footer />
                </div>);
    }

}

/*
<Router>
    <Switch>
        <Route path="/">
            <Home />
        </Route>
        <Route path="/profile">
            <h1>Hello, it works</h1>
        </Route>
    </Switch>
</Router>*/
