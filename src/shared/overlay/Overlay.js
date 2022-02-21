import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

import Constants from "../utils/Constants";

import './Overlay.scss';

const overlayButtons = Constants.OVERLAY_BUTTONS;
const overlayLanguages = Constants.OVERLAY_LANGUAGES;

export default function Overlay({ overlay, closeOverlay }) {

    const handleClick = (event) => {
        closeOverlay();
    }

    const changeLanguage = (event) => {
        closeOverlay();
        localStorage.setItem('locale', event.target.value)
        window.location.reload();
    }

    return (
        <nav>
            <div className={overlay ? "overlay overlay-shown" : "overlay overlay-hidden"}>
                <div className="overlay-close">
                    <a onClick={() => closeOverlay()} className="close" />
                </div>
                <div className="overlay-content">
                    {
                        overlayButtons.map((item, i) =>
                            (<div className="large-btn" key={i}>
                                <Link onClick={handleClick} to={`${item.link}`}>
                                    <FormattedMessage id={item.id} defaultMessage={`${item.default}`} />
                                </Link>
                            </div>))
                    }
                </div>
                <div className="overlay-languages">
                    <div className="row">
                        { overlayLanguages.map((item, i) =>
                            (<div className="col" key={i}>
                                <button onClick={changeLanguage} value={`${item.locale}`} className="language-btn">
                                    <FormattedMessage id={item.id} defaultMessage={`${item.default}`} />
                                </button>
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </nav>);

}