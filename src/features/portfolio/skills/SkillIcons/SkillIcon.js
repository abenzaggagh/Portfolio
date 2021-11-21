import './SkillIcon.scss';

export default function SkillIcon(props) {
    return (<>
        <div className={"skill-center"}>
            {props.images.map(image => <img className="skill-icon" src={image.src} alt={`${image.alt}`} style={{width: image.width}} />)}
        </div>
        <div className={"skill-title"}>
            <p>{props.title}</p>
        </div>
    </>);
}