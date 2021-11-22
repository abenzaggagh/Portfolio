import {FormattedMessage} from "react-intl";
import ExperienceRow from "./ExperienceRow/ExperienceRow";

export default function Experiences(props) {
    return (<div className={"row mt-4"}>
        <div>
            <div className={"mt-2"}>
                <h3>
                    <FormattedMessage id={`${props.title}`} defaultMessage={""} />
                </h3>
            </div>

            <div className={"mt-3"}>
                {props.experiences.map(experience => <>
                    <ExperienceRow experience={experience} />
                </>)}
            </div>
        </div>
    </div>);
}