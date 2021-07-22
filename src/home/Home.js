import React from "react";
import { FormattedMessage /*, FormattedHTMLMessage */ } from 'react-intl';

import Constants from "../shared/Utils/Constants";

import './Home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <section className="text-center">
                <div>
                    <h1 className="">
                        <FormattedMessage id="greetings" defaultMessage={`${Constants.GREETINGS}`} />
                    </h1>
                    <h3><FormattedMessage id="role" defaultMessage={`${Constants.ROLE}`} /></h3>
                </div>

                <div className="mt-5">
                    <div className="holder">
                        <div className="center">
                            <button className="btn">
                                <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                                </svg>
                                <span><FormattedMessage id="explore" defaultMessage={`${Constants.EXPLORE}`} /></span>
                            </button>
                        </div>
                    </div>
                </div>

                {/*<div>
                    <a href="#projects" className="arrow"></a>
                </div>*/}
            </section>);
    }
}