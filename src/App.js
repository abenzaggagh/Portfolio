import './App.scss';

import React from "react";

import Firestore from "./utils/firestore";
import { addDoc, collection } from "firebase/firestore";

import { Bubbles } from "./shared/Bubbles";
import Portfolio from "./features/portfolio/Portfolio";
import PrivatePortfolio from "./features/privatePortfolio/PrivatePortfolio";



const logVisit = () => {
    addDoc(collection(Firestore, "Visitors"), {
        visitedAt: new Date()
    });
}

export default function App({isAuth}) {

    logVisit()

    return (<>
        <Bubbles />
        {isAuth ? <Portfolio/> : <PrivatePortfolio />}
    </>);
}