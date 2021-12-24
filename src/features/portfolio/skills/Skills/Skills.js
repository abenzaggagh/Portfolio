import SkillRow from "./SkillRow/SkillRow";
import { FormattedMessage } from "react-intl";

export default function Skills(props) {
    return (<>
            <div className={"mb-4"}>
                <h1 className="title">
                    <FormattedMessage id={`${props.title}`} defaultMessage={""} />
                </h1>
            </div>


            <div className={"mt-3"}>
                {props.skills.map(skill => <>
                    <SkillRow skill_title={`${skill.skill_title}`} skill_subtitle={`${skill.skill_subtitle}`} skills={skill.skills} />
                </>)}
            </div>
    </>);
}