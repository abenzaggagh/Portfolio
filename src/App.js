import './App.scss';

import React, { useState } from "react";

import Firestore from "./utils/firestore";
import { addDoc, collection } from "firebase/firestore";

import { Bubbles } from "./shared/Bubbles";
import Portfolio from "./features/portfolio/Portfolio";
import PrivatePortfolio from "./features/privatePortfolio/PrivatePortfolio";

import { Theme, ThemeContext } from "./utils/context";


const logVisit = () => {
    // TODO: Add a generated unique
    addDoc(collection(Firestore, "Visitors"), {
        visitedAt: new Date()
    });
}

export default function App({isAuth}) {

    logVisit();

    const [theme, setTheme] = useState(Theme);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
                <Bubbles />
                {isAuth ? <Portfolio /> : <PrivatePortfolio />}
        </ThemeContext.Provider>
    );
}