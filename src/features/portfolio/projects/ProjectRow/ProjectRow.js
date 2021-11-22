import './ProjectRow.scss';
import Constants from "../../../../shared/utils/Constants";

export default function ProjectRow(props) {
    return (
    <>
        <div className={"row project-row"}>
            {/* TODO: Fix the displaying layout for the desktop and mobile version */}

            <div className={"col-md-4 project-clipart"}>
                <a href="#">
                    <img style={{width: "100%"}} src={props.cover} alt={"DEFAULT IMAGE"}/>
                </a>
            </div>
            <div className={"col-md-8"}>
                <h3 className={"col-4 project-title"}>{props.title}</h3>
                <p className={"project-description"}>{props.description}</p>

                {/* TODO: Displqy the list of the tech used in the project */}
                {props.technologies &&
                <div className={"row"}>
                    <div>
                        <img style={{width: "2em"}} src={Constants.SWIFT_LOGO} alt={""} />
                    </div>
                </div>
                }

                <div>
                    <a href={`${props.link}`} target={"_blank"}>GitHub Repository</a>
                </div>
            </div>
        </div>
    </>);
}