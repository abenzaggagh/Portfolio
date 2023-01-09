import './ProjectRow.scss';

import {Link} from "react-router-dom";

export default function ProjectRow(props) {
    return (
    <>
        <div className={"col mt-2 mb-4 m-5 project-row"}>
            <div className={'project-card'}>
                <div className={'project-cover'}>
                    <Link to={`project/${props.id}`}>
                        <img className={'project-cover'} src={props.cover} alt={"DEFAULT IMAGE"}/>
                    </Link>
                </div>
                <div className={'caption'}>
                    <h3 className={'mb-2'}>{props.title}</h3>
                    <div className={''}>{props.description}</div>
                    <div className={'footer'}>
                        <div className="btn btn-default text-left">
                            <a href={`${props.link}`} target={"_blank"}>Github</a>
                        </div>
                        { props.preview &&
                            <div className="btn btn-default">
                                <a href={`${props.preview}`} target={"_blank"}>Preview</a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>);
}