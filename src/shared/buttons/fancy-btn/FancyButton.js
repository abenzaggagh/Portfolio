import React from "react";

import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";

import "./FancyButton.scss";

// TODO: Improve its sizing and make it responsive
export default function FancyButton(props) {

    return (
        <>
            <Link to={`${props.link}`}>
                <button className={"button"}>
                    <FormattedMessage id={`${props.title}`} defaultMessage={`${props.defaultTitle}`} />
                    <div className={"button__horizontal"}> </div>
                    <div className={"button__vertical"}> </div>
                </button>
            </Link>
        </>);
}