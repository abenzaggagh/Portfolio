import React, {useState} from "react";

import {Route, Switch} from "react-router-dom";

import Home from "./home/Home";
import Blog from "./blog/Blog";
import Projects from "./projects/Projects";
import Profile from "./profile/Profile";
import SkillsExperiences from "./skills/SkillsExperiences";

import Header from "../../shared/header/Header";
import Overlay from "../../shared/overlay/Overlay";
import Footer from "../../shared/footer/Footer";
import NotFound from "../../shared/notFound/NotFound";


export default function Portfolio() {
    const [overlay, setOverlay] = useState(false);

    return (
        <div className="fluid-container">
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
                        <SkillsExperiences />
                    </Route>
                    <Route path='*' exact={true} component={NotFound} />
                </Switch>
            </main>
            <Overlay overlay={overlay} closeOverlay={() => setOverlay(false)} />
            <Footer/>
        </div>);
}