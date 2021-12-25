import React from "react";

import './Header.scss';

export default function Header({ toggleThemeMode, openOverlay }) {
    return (
        <header>
            <div id="header" className="p-2" onClick={() => toggleThemeMode()}>
                <div className={"menu"}>
                    <span />
                    <span />
                    <span />
                </div>
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