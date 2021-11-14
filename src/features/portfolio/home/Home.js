import React from "react";
import { FormattedMessage } from 'react-intl';

import Constants from "../../../shared/utils/Constants";

import './Home.scss';

import SquareButton from "../../../shared/buttons/square-btn/SquareButton";

export default function Home() {
    return (
        <>
            <section className="home text-center">
                <>
                    <h1>
                        <FormattedMessage id="greetings" defaultMessage={`${Constants.GREETINGS}`} />
                    </h1>
                    <div className="typewriter">
                        <h3><FormattedMessage id="role" defaultMessage={`${Constants.ROLE}`} /></h3>
                    </div>
                </>

                <SquareButton title={"explore"} defaultTitle={Constants.EXPLORE} link={Constants.WORKS_LINK} isFile={false} />

            </section>
        </>);
}

