import {FormattedMessage} from "react-intl";
import EducationRow from "./ExperienceRow/EducationRow";

export default function Education(props) {
    return (<div className={"row mt-4"}>
        <div>
            <div className={"mt-2 mb-5"}>
                <h1 className="title">
                    <FormattedMessage id={`${props.title}`} defaultMessage={""} />
                </h1>
            </div>

            <div className={"mt-3"}>
                {props.educations.sort((a, b) => a.position - b.position).map(education => <>
                    <EducationRow education={education} />
                </>)}
            </div>
        </div>
    </div>);
}