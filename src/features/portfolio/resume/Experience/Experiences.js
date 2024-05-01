import React from "react";
import {FormattedMessage} from "react-intl";
import ExperienceRow from "./ExperienceRow/ExperienceRow";

export default function Experiences(props) {
    return (<div className={"row mt-4"}>
        <div>
            <div className={"mt-2 mb-4"}>
                <h1 className="title">
                    <FormattedMessage id={`${props.title}`} defaultMessage={""} />
                </h1>
            </div>

            <div className={"mt-3"}>
                { props.experiences.sort((a, b) => a.position - b.position).map(experience => <>
                    <ExperienceRow experience={experience} />
                </>)}
            </div>
        </div>
    </div>);
}