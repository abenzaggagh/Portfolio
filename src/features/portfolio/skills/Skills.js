import './Skills.scss';

import { FormattedMessage } from "react-intl";

import SquareButton from "../../../shared/buttons/square-btn/SquareButton";

import SkillIcon from "./SkillIcons/SkillIcon";

import Constants from "../../../shared/utils/Constants";

export default function Skills() {
    return (
        <>
            <div className={"container"}>

                <div className={"row"}>
                    <div>
                        <div className={""}>
                            <h3>
                                <FormattedMessage id={"skills_front_end_title"} defaultMessage={""} />
                            </h3>
                        </div>

                        <div className={"mt-3"}>
                            <p>
                                <FormattedMessage id={"skills_front_end_line"} defaultMessage={""} />
                            </p>
                        </div>

                        <div className={"mt-3"}>
                            <div className={"row"}>
                                {Constants.FRONT_END_SKILLS.map(skill => <>
                                    <div className={"col"}>
                                        <SkillIcon images={skill.images} title={skill.title}/>
                                    </div>
                                </>)}
                            </div>
                        </div>

                    </div>
                </div>

                <div className={"row mt-4"}>
                    <div>
                        <div className={""}>
                            <h3>
                                <FormattedMessage id={"skills_back_end_title"} defaultMessage={""} />
                            </h3>
                        </div>

                        <div className={"mt-3"}>
                            <p>
                                <FormattedMessage id={"skills_back_end_line"} defaultMessage={""} />
                            </p>
                        </div>

                        <div className={"mt-3"}>
                            <div className={"row"}>
                                {Constants.BACK_END_SKILLS.map(skill => <>
                                    <div className={"col"}>
                                        <SkillIcon images={skill.images} title={skill.title}/>
                                    </div>
                                </>)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"row mt-4"}>
                    <div>
                        <div className={""}>
                            <h3>
                                <FormattedMessage id={"skills_others_title"} defaultMessage={""} />
                            </h3>
                        </div>

                        <div className={"mt-3"}>
                            <p>
                                <FormattedMessage id={"skills_others_line"} defaultMessage={""} />
                            </p>
                        </div>

                        <div className={"mt-3"}>
                            <div className={"row"}>
                                {Constants.OTHERS_SKILLS.map(skill => <>
                                    <div className={"col"}>
                                        <SkillIcon images={skill.images} title={skill.title} />
                                    </div>
                                </>)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"row mt-4"}>
                    <div>
                        <div className={"mt-2"}>
                            <h3>Soft Skills</h3>
                        </div>

                        <div className={"mt-3"}>
                            <p> </p>
                        </div>
                    </div>
                </div>

                <div className={"row mt-4"}>
                    <div>
                        <div className={"mt-2"}>
                            <h3>Experiences</h3>
                        </div>

                        <div className={"mt-3"}>
                            {Constants.EXPERIENCES.map(experience => <>
                                <div className={"row mb-3"}>
                                    <div className={"col"}>
                                        <h5>{experience.fromDate} - {experience.toDate}</h5>
                                    </div>
                                    <div className={"col"}>
                                        <h3>{experience.role}</h3>
                                        <h5>{experience.company}</h5>
                                    </div>
                                    <div className={"col"}>
                                        <ul>
                                            {experience.tasks.map(task => <li>
                                                <p>{task}</p>
                                            </li>)}
                                        </ul>
                                    </div>
                                </div>
                            </>)}
                        </div>
                    </div>
                </div>

                <div className={"row mt-2 mb-4"}>
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