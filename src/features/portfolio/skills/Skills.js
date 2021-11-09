import './Skills.scss';

import React from "react";

import SquareButton from "../../../shared/buttons/square-btn/SquareButton";

export default function Skills() {
    return (
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <h3>Front-End Engineering</h3>
                    <div>

                    </div>
                </div>
                <div className={"row"}>
                    <h3>Back-End Engineering</h3>
                    <div>
                        <p>In back-end development, my current stack involves Java and Spring Framework, and alternatively NodeJS and Express.</p>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <SquareButton title={"Resumé"} defaultTitle={""}  isFile={true}
                                      link={"https://firebasestorage.googleapis.com/v0/b/abenzaggagh.appspot.com/o/Curriculum%20vitae%2FAmine%20BEN%20ZAGGAGH%20-%20Resume.pdf?alt=media&token=acdb0871-8432-45ff-b457-6128d45c9b4e"} />
                    </div>
                    <div className={"col-6"}>
                        <SquareButton title={"Curriculum vitae"} defaultTitle={""} isFile={true}
                                      link={"https://firebasestorage.googleapis.com/v0/b/abenzaggagh.appspot.com/o/Curriculum%20vitae%2FAmine%20BEN%20ZAGGAGH%20-%20CV.pdf?alt=media&token=fe44e02b-2432-4300-8bc1-5f692f1605fc"}/>
                    </div>
                </div>
            </div>
        </>
    );
}