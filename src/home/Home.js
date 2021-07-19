import React from "react";
import { FormattedMessage /*, FormattedHTMLMessage */ } from 'react-intl';

import Constants from "../shared/Utils/Constants";

import './Home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <main className="text-center">
                <h1>
                    <FormattedMessage id="greetings" defaultMessage={`${Constants.GREETINGS}`} />
                </h1>
            </main>);
    }
}