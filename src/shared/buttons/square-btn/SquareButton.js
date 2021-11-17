import "./SquareButton.scss";

import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
/*
// TODO: Improve and make it responsive
export default function SquareButton(props) {
    const squareButtonContent = (<>
        <svg viewBox="0 0 100 45" className="border svg">
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>
            <FormattedMessage id={`${props.title}`} defaultMessage={`${props.defaultTitle}`} />
        </span>
    </>);

    return (<>x
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
*/

export default function SquareButton(props) {
    return (<>
        <div className="mt-4">
            <div className="holder">
                <div className="center">
                    {props.isFile ?
                        <a className="fill">
                            <FormattedMessage id={`${props.title}`} defaultMessage={`${props.defaultTitle}`} />
                        </a>
                        :
                        <Link role="button" to={`${props.link}`}>
                            <button className="fill">
                                <FormattedMessage id={`${props.title}`} defaultMessage={`${props.defaultTitle}`} />
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>

    </>);
}