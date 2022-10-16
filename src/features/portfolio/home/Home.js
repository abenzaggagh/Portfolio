import './Home.scss';

import React from "react";
import { FormattedMessage } from 'react-intl';

import Constants from "../../../shared/utils/Constants";

import SquareButton from "../../../shared/buttons/square-btn/SquareButton";


export default function Home() {
    return (
        <>
            <section className="home text-center">
                <div className={""}>
                    <h1 className={"front-title"}>
                        <FormattedMessage id="greetings" defaultMessage={`${Constants.GREETINGS}`} />
                    </h1>
                </div>
                <div className={"front-subtitle mt-3"}>
                    <div className="typewriter">
                        <h3><FormattedMessage id="role" defaultMessage={`${Constants.ROLE}`} /></h3>
                    </div>
                </div>
                <div className={"mt-3"}>
                    <SquareButton title={"explore"} style={"fill"} defaultTitle={Constants.EXPLORE} link={Constants.WORKS_LINK}  />
                </div>
            </section>
        </>);
}

