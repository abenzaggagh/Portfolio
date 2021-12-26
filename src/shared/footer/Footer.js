import React from "react";

import './Footer.scss';

import Constants from "../utils/Constants";

export default function Footer({theme}) {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    { Constants.FOOTER.map((item, i) =>
                        (<div className="col" key={i}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {theme === "dark" ?
                                    <img className="logo" alt={item.alternative} src={item.image} />
                                    :
                                    <img className="logo" alt={item.alternative} src={item.imageLight} />
                                }

                            </a>
                        </div>)
                    )}
                </div>
            </div>
        </footer>)
}