import './Skills.scss';
import {Alert} from "react-bootstrap";
import {FormattedMessage} from "react-intl";
import Constants from "../../shared/utils/Constants";

export default function Skills() {
    return (
        <div>
            <Alert className="info">
                <FormattedMessage id="under_construction" defaultMessage={`${Constants.UNDER_CONSTRUCTION}`} />
            </Alert>
            <h1>Skills!</h1>
        </div>)
}