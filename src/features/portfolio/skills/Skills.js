import './Skills.scss';

import { FormattedMessage } from "react-intl";

import SquareButton from "../../../shared/buttons/square-btn/SquareButton";

import Constants from "../../../shared/utils/Constants";
import SkillRow from "./SkillRow/SkillRow";
import Experiences from "./Experience/Experiences";

export default function Skills() {
    return (
        <>
            <div className={"container"}>

                <div className={"mb-4"}>
                    <h1 className="title">
                        <FormattedMessage id={"skills_title"} defaultMessage={""} />
                    </h1>
                </div>

                <SkillRow skill_title={"skills_front_end_title"}
                          skill_subtitle={"skills_front_end_line"}
                          skills={Constants.FRONT_END_SKILLS}/>

                <SkillRow skill_title={"skills_back_end_title"}
                          skill_subtitle={"skills_back_end_line"}
                          skills={Constants.BACK_END_SKILLS}/>

                <SkillRow skill_title={"skills_others_title"}
                          skill_subtitle={"skills_others_line"}
                          skills={Constants.OTHERS_SKILLS}/>

                <SkillRow skill_title={"skills_soft_title"}
                          skills={Constants.SOFT_SKILLS} />

                <Experiences title={"experience_title"}
                    experiences={Constants.EXPERIENCES} />

                <div className={"row mt-5 mb-4"}>
                    <div className={"col-6"}>
                        <SquareButton isFile={true}
                                      style={"raise"}
                                      title={"Resume"}
                                      defaultTitle={""}
                                      link={"https://firebasestorage.googleapis.com/v0/b/abenzaggagh.appspot.com/o/Curriculum%20vitae%2FAmine%20BEN%20ZAGGAGH%20-%20Resume.pdf?alt=media&token=acdb0871-8432-45ff-b457-6128d45c9b4e"} />
                    </div>
                    <div className={"col-6"}>
                        <SquareButton isFile={true}
                                      style={"raise"}
                                      title={"Curriculum vitae"}
                                      defaultTitle={""}
                                      link={"https://firebasestorage.googleapis.com/v0/b/abenzaggagh.appspot.com/o/Curriculum%20vitae%2FAmine%20BEN%20ZAGGAGH%20-%20CV.pdf?alt=media&token=fe44e02b-2432-4300-8bc1-5f692f1605fc"}/>
                    </div>
                </div>
            </div>
        </>
    );
}