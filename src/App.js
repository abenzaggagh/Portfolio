import React from "react";
import {
    Link,
    Route,
    Switch,
    BrowserRouter as Router,
} from "react-router-dom";

import './App.scss';

import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";

import Home from "./home/Home";

function App() {
    return (
        <div className="fluid-container">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
