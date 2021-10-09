import React from "react";
import { FormattedMessage } from 'react-intl';

import Constants from "../../../shared/utils/Constants";

import './Home.scss';
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <section className="home text-center p-5">
            <>
                <h1>
                    <FormattedMessage id="greetings" defaultMessage={`${Constants.GREETINGS}`} />
                </h1>
                <div className="typewriter">
                    <h3><FormattedMessage id="role" defaultMessage={`${Constants.ROLE}`} /></h3>
                </div>
            </>

            <div className="mt-5">
                <div className="holder">
                    <div className="center">
                        <Link role="button" className="btn center-padding" to={`${Constants.WORKS_LINK}`}>
                            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                            </svg>
                            <span><FormattedMessage id="explore" defaultMessage={`${Constants.EXPLORE}`} /></span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>);
}

