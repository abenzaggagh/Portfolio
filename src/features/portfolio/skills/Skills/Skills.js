import Constants from "../../../../shared/utils/Constants";

import SkillRow from "./SkillRow/SkillRow";

export default function Skills(props) {
    return (<>
        {props.skills.map(skill => <>
            <SkillRow skill_title={`${skill.skill_title}`}
                      skill_subtitle={`${skill.skill_subtitle}`}
                      skills={skill.skills}/>
        </>)}
    </>);
}