import './Profile.scss';
import {Link} from "react-router-dom";

export default function Profile() {
    return (
        <div className={'container'}>
            {/*<Alert className="info">
                <FormattedMessage id="under_construction" defaultMessage={`${Constants.UNDER_CONSTRUCTION}`} />
            </Alert>*/}
            <h1 className={'align-left'}>Profile!</h1>
            <div className={'paragraph'}>
                <p>
                    My name is Amine. I write code and develop web and mobile applications.
                    I live in Casablanca but I'm from Meknes (little town)...
                </p>
                <p>I love programming, traveling, reading books!</p>
                <p>I focus on writing clean, elegant and efficient code.</p>
                <p>Currently working as a Software Engineer at <Link to={{ pathname: "https://docaposte.fr" }} target="_blank">Docaposte</Link>.</p>
            </div>

            <div className={'paragraph'}>
                <h3>Career Goals</h3>
                {/*My experiences during my Digital Marketing internship helped me identify goals for my marketing career.
                   I would like to find opportunities where I can help organizations attract and retain customers.
                   I would also like to cultivate relationships using multiple social media platforms.*/}
                <p>Become a tech lead and then an architect in developing large scale enterprise applications using the recent technologies.</p>
            </div>
        </div>)
}