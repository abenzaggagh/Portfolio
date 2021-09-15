import React from "react";

import './Header.scss';

export default function Header({ openOverlay }) {
    return (<header>
        <div className="icon" onClick={() => openOverlay()} >
                    <span>
                    </span>
        </div>
    </header>);
}