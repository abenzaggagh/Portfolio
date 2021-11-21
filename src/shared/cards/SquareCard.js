import "./SquareCard.scss"

import React, {useEffect, useState} from "react";

export default function SquareCard(props) {
    return (<>
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
    </>)
}