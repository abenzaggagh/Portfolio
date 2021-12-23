import React from "react";

import "./NotFound.scss";

import Constants from "../utils/Constants";
import SquareButton from "../buttons/square-btn/SquareButton";

export default function NotFound() {
    return (<>
        <div className={"container mt-3"}>
            <div className={"row"}>
                <div className={"center"}>
                    <h2 className={"title"}>404 Error</h2>
                </div>
            </div>
            <div className={"row"}>
                <div className={"col-md-12"}>
                    <div className={"align-center"}>
                        <img className={""} src={Constants.NOT_FOUND_MEMOJI} alt={"404 - Not Found Memoji"}/>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={""}>
                        <div className={"center"}>
                            <h3>Page Not Found</h3>
                            <br />
                        </div>
                        <div className={"center"}>
                            <p className={"text"}>OOPS! You have found a page that could not be found.</p>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <SquareButton title={"homepage"} style={"pulse"} defaultTitle={Constants.HOMEPAGE} link={"/"}  />
                </div>
            </div>
        </div>
    </>);
}