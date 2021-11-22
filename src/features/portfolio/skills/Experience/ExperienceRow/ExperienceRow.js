import './ExperienceRow.scss';
import {FormattedMessage} from "react-intl";

export default function ExperienceRow(props) {
    return (<>
        <div className={"row mb-3"}>
            <div className={"col-sm-3"}>
                <p className={"exp-date"}>
                    <FormattedMessage id={`${props.experience.fromDate}`} defaultMessage={`${props.experience.fromDate}`} /> - &nbsp;
                    <FormattedMessage id={`${props.experience.toDate}`} defaultMessage={`${props.experience.toDate}`} />
                </p>
            </div>
            <div className={"col-sm-5"}>
                <p className={"exp-title"}>
                    <FormattedMessage id={`${props.experience.role}`} defaultMessage={`${props.experience.role}`} />
                </p>
                {props.experience.project &&
                <p className={"exp-subtitle"}>
                    <FormattedMessage id={`${props.experience.project}`} defaultMessage={`${props.experience.project}`} />
                </p>
                }
                <p className={"exp-subtitle"}>
                    <FormattedMessage id={`${props.experience.company}`} defaultMessage={`${props.experience.company}`} />
                </p>
            </div>
            <div className={"col-sm-4"}>
                <ul>
                    {props.experience.tasks.map(task => <li>
                        <p className={"exp-body"}>
                            <FormattedMessage id={`${task}`} defaultMessage={`${task}`} />
                        </p>
                    </li>)}
                </ul>
            </div>
        </div>
    </>);
}