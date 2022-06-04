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
import Secret from "../privatePortfolio/secret/Secret";
import ProjectDetails from "./projects/ProjectDetails/ProjectDetails";

export default function Portfolio() {

    const [theme, setTheme] = useContext(ThemeContext);

    const [overlay, setOverlay] = useState(false);

    const toggleTheme = (theme) => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem('theme', "dark");
        } else if (theme === "dark") {
            setTheme("light")
            localStorage.setItem('theme', "light");
        }
    }

    return (
        <div className="fluid-container dark-theme">
            <Header theme={theme} toggleThemeMode={() => { toggleTheme(theme) }} openOverlay={() => { setOverlay(true) }} />
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
                    <Route path="/project/:id">
                        <ProjectDetails />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/skills">
                        <SkillsExperiences />
                    </Route>
                    <Route path="/secret">
                        <Secret />
                    </Route>
                    <Route path='*' exact={true} component={NotFound} />
                </Switch>
            </main>
            <Overlay overlay={overlay} closeOverlay={() => setOverlay(false)} />
            <Footer theme={theme} />
        </div>);
}