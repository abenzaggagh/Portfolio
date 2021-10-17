import './ProjectRow.scss';

import nativeImage from '../../../../assets/images/native.jpg';

export default function ProjectRow(props) {
    return (
    <>
        <div className={"row project-row mt-2"}>
            <div className={"col-4 project-clipart"}>
                <a href="#">
                    <img width={300} src={nativeImage} alt={"DEFAULT IMAGE"}/>
                </a>
            </div>
            <div className={"col-8"}>
                <h3 className={"col-4 project-title"}>{props.title}</h3>
                <a href={`${props.link}`} target={"_blank"}>GitHub Repository</a>
            </div>
        </div>
    </>);
}