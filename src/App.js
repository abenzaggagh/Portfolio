import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import Overlay from "./shared/overlay/Overlay";

import Home from "./features/home/Home";
import Blog from "./features/blog/Blog";
import Skills from "./features/skills/Skills";
import Profile from "./features/profile/Profile";
import Projects from "./features/projects/Projects";

export default function App() {
    const [overlay, setOverlay] = useState(false);

    return (<div className="fluid-container">
        <Header openOverlay={() => { setOverlay(true) }} />
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
            </Switch>
        </main>
        <Overlay overlay={overlay} closeOverlay={() => setOverlay(false)} />
        <Footer/>
    </div>);
}