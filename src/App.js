import './App.scss';

import React, { useState } from "react";

import Firestore from "./utils/firestore";
import { addDoc, collection } from "firebase/firestore";

import { Bubbles } from "./shared/Bubbles";

import Portfolio from "./features/portfolio/Portfolio";
import PrivatePortfolio from "./features/privatePortfolio/PrivatePortfolio";

import { Theme, ThemeContext } from "./utils/context";
import * as ReactGA from "react-ga";


const logVisit = () => {
    // TODO: Add a generated unique
    addDoc(collection(Firestore, "Visitors"), {
        visitedAt: new Date()
    });
}
const initReactGA = () => {
    ReactGA.initialize('UA-209766994-2');
    ReactGA.pageview('portfolio');
};

export default function App({isAuth}) {

    // logVisit();

    initReactGA();

    const [theme, setTheme] = useState(Theme);

    if (theme === "light") {
        document.documentElement.style.setProperty("--textColor", "#000");
        document.documentElement.style.setProperty("--backgroundColor", "#FFF");
    } else if (theme === "dark") {
        document.documentElement.style.setProperty("--textColor", "#FFF");
        document.documentElement.style.setProperty("--backgroundColor", "#000");
    }

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
                <Bubbles />
                {isAuth ? <Portfolio /> : <PrivatePortfolio />}
        </ThemeContext.Provider>
    );
}