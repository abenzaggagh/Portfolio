import './EducationRow.scss';

import {Locale} from "../../../../../shared/utils/Languages";

export default function EducationRow(props) {
    return (<>
        <div className={"row mb-3"}>
            <div className={"col-sm-3"}>
                <div className={"exp-date"}>
                    <p className={"m-0"}>{props.education.from && props.education.from[Locale]}</p>
                    <span className={''}>-</span>
                    <p className={"m-0"}>{props.education.to && props.education.to[Locale]}</p>
                </div>
            </div>
            <div className={"col-sm-9"}>
                <p className={"exp-title"}>
                    {props.education.title && props.education.title[Locale]}
                </p>

                <p className={"exp-subtitle"}>
                    {props.education.school && props.education.school[Locale]}
                    <span className={'spacer'}>-</span>
                    {props.education.location && props.education.location[Locale]}
                </p>

                <p className={"exp-subtitle"}>
                    {props.education.description && props.education.description[Locale]}
                </p>
            </div>
            <hr className="separator" />
        </div>
    </>);
}