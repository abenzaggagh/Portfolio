import './Projects.scss';
import { Alert } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

import Constants from "../../../shared/utils/Constants";

export default function Projects() {
    return (
        <div>
            <Alert className="info">
                <FormattedMessage id="under_construction" defaultMessage={`${Constants.UNDER_CONSTRUCTION}`} />
            </Alert>
            <h1><FormattedMessage id="projects" defaultMessage={`${Constants.PROJECTS}`} /></h1>
        </div>)
}