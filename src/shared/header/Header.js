import React from "react";

import './Header.scss';

import Constants from "../utils/Constants";

export default function Header({ theme, toggleThemeMode, openOverlay }) {
    return (
        <header>
            <div id="header" className="p-4 theme-changer" onClick={() => toggleThemeMode()}>
                {theme === "dark" ?
                    <img className="theme-changer-icon" alt={"Theme Mode Toggle Button"} src={Constants.SUN} />
                    :
                    <img className="theme-changer-icon" alt={"Theme Mode Toggle Button"} src={Constants.MOON} />
                }
            </div>
            <div id="header" className="icon" onClick={() => openOverlay()} >
                <div className={"menu"}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </header>);
}