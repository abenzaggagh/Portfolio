import './ProjectRow.scss';

export default function ProjectRow(props) {
    return (
    <>
        <div className={"row project-row"}>
            <div className={"col-4 project-clipart"}>
                <a href="#">
                    <img width={300} src={props.cover} alt={"DEFAULT IMAGE"}/>
                </a>
            </div>
            <div className={"col-8"}>
                <h3 className={"col-4 project-title"}>{props.title}</h3>
                <p className={"project-description"}>{props.description}</p>
                <a href={`${props.link}`} target={"_blank"}>GitHub Repository</a>
            </div>
        </div>
    </>);
}