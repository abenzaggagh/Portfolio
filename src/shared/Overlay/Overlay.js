import React from "react";
import PropTypes from "prop-types";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    
} from "react-router-dom";
import { withRouter } from "react-router";


import { FormattedMessage } from 'react-intl';

import Constants from "../Utils/Constants";

import './Overlay.scss';

export default class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.closeOverlay = this.closeOverlay.bind(this);
    }

    closeOverlay = () => {
        document.getElementById("overlay").style = "width: 0%";
    }

    handleClick = (event) => {
        this.closeOverlay();
    }

    render() {
        let buttons = Constants.OVERLAY_BUTTONS.map((item, i) => 
            (<div className="" key={i}>
                    <Link onClick={this.handleClick} to={`${item.link}`}>
                        <FormattedMessage id={item.id} defaultMessage={`${item.default}`} />
                    </Link>
            </div>));

        let languages = Constants.OVERLAY_LANGUAGES.map((item, i) => 
            (<div className="col" key={i}>
                    <Link onClick={this.handleClick} to={`${item.link}`}>
                        <FormattedMessage id={item.id} defaultMessage={`${item.default}`} />
                    </Link>
            </div>));

        return (
            <nav>
                <div id="overlay" className="overlay">
                    <div className="overlay-close">
                        <a onClick={this.closeOverlay} className="close" />
                    </div>
                    <div className="overlay-content">
                        { buttons }
                    </div>
                    <div className="overlay-languages">
                        <div className="row">
                            { languages }
                        </div>
                    </div>
                </div>
            </nav>);
    }
}