import React from "react";

import './Footer.scss';

import Constants from "../Utils/Constants";

export default class Footer extends React.Component {

    render() {
        let social = Constants.FOOTER.map(item => 
            (<div className="col">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <img className="logo" alt={item.alternative} src={item.image} />
                    </a>
            </div>));

        return (<footer>           
                    <div className="container">
                        <div className="row">
                            <div className="col"></div>
                            {social}
                            <div className="col"></div>
                        </div>
                    </div>
                </footer>);
    }
}