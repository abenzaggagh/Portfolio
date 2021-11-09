import "./SquareButton.scss";

import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

export default function SquareButton(props) {
    const squareButtonContent = (<>
        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>
            <FormattedMessage id={`${props.title}`} defaultMessage={`${props.defaultTitle}`} />
        </span>
    </>);

    return (<>
        <div className="mt-5">
            <div className="holder">
                <div className="center">
                    {props.isFile ?
                        <a role="button" href={`${props.link}`} className="btn center-padding" target={'_blank'}>
                            { squareButtonContent }
                        </a>
                            :
                        <Link role="button" to={`${props.link}`} className="btn center-padding">
                            { squareButtonContent }
                        </Link>
                    }
                </div>
            </div>
        </div>
    </>);
}
