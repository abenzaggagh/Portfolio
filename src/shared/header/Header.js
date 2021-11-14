import React from "react";

import './Header.scss';

export default function Header({ openOverlay }) {
    return (
        <header>
            <div id="header" className="icon" onClick={() => openOverlay()} >
                <div className={"menu"}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </header>);
}