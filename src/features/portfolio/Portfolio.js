import React, {useContext, useState} from "react";

import {Route, Switch} from "react-router-dom";

import { ThemeContext } from "../../utils/context";

import Home from "./home/Home";
import Blog from "./blog/Blog";
import Projects from "./projects/Projects";
import Profile from "./profile/Profile";
import SkillsExperiences from "./skills/SkillsExperiences";

import Header from "../../shared/header/Header";
import Overlay from "../../shared/overlay/Overlay";
import Footer from "../../shared/footer/Footer";
import NotFound from "../../shared/notFound/NotFound";

require('../../../src/assets/styles/theme/LightTheme.scss');

export default function Portfolio() {

    const [theme, setTheme] = useContext(ThemeContext);

    const [overlay, setOverlay] = useState(false);

    const toggleTheme = (theme) => {
        setTheme("light")
        localStorage.setItem('theme', "light")
        if (theme === "light") {
            setTheme("dark")
            localStorage.setItem('theme', "dark")
            require('../../../src/assets/styles/theme/LightTheme.scss');
        }
    }

    return (
        <div className="fluid-container dark-theme">
            <Header toggleThemeMode={() => { toggleTheme(theme) }} openOverlay={() => { setOverlay(true) }} />
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