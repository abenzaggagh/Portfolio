import React from "react";

import './Footer.scss';

import Mail from '../../assets/images/mail.svg';
import GitHub from '../../assets/images/github.svg';
import Facebook from '../../assets/images/facebook.svg';

export default class Footer extends React.Component {
    render() {
        return (
        <footer>           
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <a href="https://github.com/abenzaggagh" target="_blank">
                            <img className="logo" alt="github-logo" src={GitHub} />
                        </a>
                    </div>
                    <div className="col">
                        <a href="#" target="_blank">
                            <img className="logo" alt="facebook-logo" src={Facebook} />
                        </a>
                    </div>
                    <div className="col">
                        <a href="mailto:amine.benzaggagh@icloud.com">
                            <img className="logo" alt="mail-logo" src={Mail} />
                        </a>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </footer>);
    }
}