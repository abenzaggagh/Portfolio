import "./FlipButton.scss";

import React from "react";
import {FormattedMessage} from "react-intl";

// TODO: Improve and make it responsive
export default function FlipButton(props) {
    return (<>
        <div className="flip">
            <a href="" target="_blank">
                <div className="front">
                    <FormattedMessage id={`${props.title}`} defaultMessage={`${props.defaultTitle}`} />
                </div>
                <div className="back">
                    <FormattedMessage id={`${props.title}`} defaultMessage={`${props.defaultTitle}`} />
                </div>
            </a>
        </div>
    </>);
}