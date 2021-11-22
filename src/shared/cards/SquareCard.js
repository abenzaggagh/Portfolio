import "./SquareCard.scss"

import React, {useEffect, useState} from "react";

import {OverlayTrigger, Popover} from "react-bootstrap";

export default function SquareCard(props) {
    let popover;

    if (props.quote) {
        popover = (<Popover id="popover-trigger-hover-focus" title="Popover top">
            <div className={"p-2"}>
                <strong>My favorite quote is</strong> {props.quote}
            </div>
        </Popover>);
    } else {
        popover = (<>
            <Popover id="popover-trigger-hover-focus" title="Popover top">

            </Popover>
        </>)
    }

    return (<>
        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={popover} defaultShow={""}>
            <div className={"card"}>
                <div className={"card-cover"}>
                    {props.cover ?
                        <img className="card-img-top" src={props.cover} alt="Book Cover" />
                        :
                        (<div className="spinner-grow card-loading" role="status">
                            <span className="visually-hidden">Loading</span>
                        </div>)
                    }
                </div>

                <div className={"card-body mt-2"}>
                    <h4 className={"card-title"}>{props.title}</h4>
                    <p className={"card-text"}>{props.author}</p>
                </div>

            </div>
        </OverlayTrigger>
    </>)
}