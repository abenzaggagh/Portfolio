import React from "react";

import './Header.scss';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
    }


    openModal = () => {
        // this.props.handleOverlay(true);
        document.getElementById("overlay").style = "width: 100%";
    }

    render() {
        return (
        <header>
            <div className="icon" onClick={this.openModal}>
                <span></span>
            </div>
        </header>);
    }
}