import './ProjectRow.scss';

import Constants from "../../../../shared/utils/Constants";

import {Link} from "react-router-dom";
import {Badge} from "react-bootstrap";

export default function ProjectRow(props) {
    return (
    <>
        <div className={"row project-row"}>
            {/* TODO: Fix the displaying layout for the desktop and mobile version */}

            <div className={"col-md-4 project-clipart"}>
                <Link to={`project/${props.id}`}>
                    <img style={{width: "100%"}} src={props.cover} alt={"DEFAULT IMAGE"}/>
                </Link>
            </div>

            <div className={"col-md-8"}>
                <Link to={`project/${props.id}`}>
                    <h3 className={"col-4 project-title"}>
                        {props.title}
                    </h3>
                    <Badge variant={'primary'}>In Progress</Badge>
                </Link>

                <p className={"project-description"}>{props.description}</p>

                {/* TODO: Displqy the list of the tech used in the project */}
                {props.technologies &&
                <div className={"row"}>
                    <div>
                        <img style={{width: "2em"}} src={Constants.SWIFT_LOGO} alt={""} />
                    </div>
                </div>
                }

                <div className={"row"} style={{zIndex:100}}>
                    <div className={"col-6"}>
                        <a href={`${props.link}`}
                           target={"_blank"}
                           className={props.link === 'DISABLED' ? 'project-disabled' : ''}>GitHub Repository</a>
                    </div>

                    {(props.preview && props.preview !== 'NONE') &&
                        <div className={"col-6"}>
                            <a href={`${props.preview}`} target={"_blank"}>Preview</a>
                        </div>
                    }
                </div>

            </div>
        </div>
    </>);
}