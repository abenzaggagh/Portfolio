import './Profile.scss';
import {Alert} from "react-bootstrap";
import {FormattedMessage} from "react-intl";
import Constants from "../../shared/utils/Constants";

export default function Profile() {
    return (
        <div className={'page'}>
            <Alert className="info">
                <FormattedMessage id="under_construction" defaultMessage={`${Constants.UNDER_CONSTRUCTION}`} />
            </Alert>
            <h1>Profile!</h1>
        </div>)
}