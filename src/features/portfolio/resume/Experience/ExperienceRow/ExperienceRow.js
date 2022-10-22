import './ExperienceRow.scss';

import {Locale} from "../../../../../shared/utils/Languages";

export default function ExperienceRow(props) {
    return (<>
        <div className={"row mb-3"}>
            <div className={"col-sm-3"}>
                <div className={"exp-date"}>
                    <p className={"m-0"}>{props.experience.from[Locale]}</p>
                    <span className={'spacer'}>-</span>
                    <p className={"m-0"}>{props.experience.to[Locale]}</p>
                </div>
            </div>
            <div className={"col-sm-3"}>
                <p className={"exp-title"}>
                    {props.experience.role[Locale]}
                </p>

                {props.experience.project &&
                    <p className={"exp-subtitle"}>
                        {props.experience.project}
                    </p>
                }
                <p className={"exp-subtitle"}>
                    {props.experience.company}
                </p>
            </div>
            <div className={"col-sm-6"}>
                <ul>
                    { props.experience.tasks.map(task => <li>
                        <p className={"exp-body"}>
                            {task[Locale]}
                        </p>
                    </li>) }
                </ul>
            </div>
        </div>
    </>);
}