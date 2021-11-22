import "./SquareButton.scss";

import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";


/*
"up"
"fill"
"slide"
"offset"
"pulse"
"raise"
*/
export default function SquareButton(props) {
    return (<>
        <div className="holder">
            <div className="center">
                {props.isFile ?
                    <a href={`${props.link}`} download>
                        <button className={props.style}>
                            <FormattedMessage id={`${props.title}`} defaultMessage={`${props.defaultTitle}`} />
                        </button>
                    </a>
                    :
                    <Link role="button" to={`${props.link}`}>
                        <button className={props.style}>
                            <FormattedMessage id={`${props.title}`} defaultMessage={`${props.defaultTitle}`} />
                        </button>
                    </Link>
                }
            </div>
        </div>
    </>);
}