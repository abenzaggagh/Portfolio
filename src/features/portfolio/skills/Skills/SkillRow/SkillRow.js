import {FormattedMessage} from "react-intl";
import SkillIcon from "../SkillIcons/SkillIcon";

export default function SkillRow(props) {
    return (<>
        <div className={"row"}>

            <div className={"mt-2"}>
                <h3>
                    <FormattedMessage id={`${props.skill_title}`} defaultMessage={""} />
                </h3>
            </div>

            {props.skill_subtitle &&
                <div className={"mt-3"}>
                    <p>
                        <FormattedMessage id={`${props.skill_subtitle}`} defaultMessage={""} />
                    </p>
                </div>
            }

            {props.skills &&
                <div className={"mt-3"}>
                    <div className={"row"}>
                        {props.skills.map(skill => <>
                            <div className={"col"}>
                                <SkillIcon images={skill.images} title={skill.title} />
                            </div>
                        </>)}
                    </div>
                </div>
            }

        </div>
    </>);
}
