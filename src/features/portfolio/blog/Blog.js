import './Blog.scss';
import {Alert} from "react-bootstrap";
import {FormattedMessage} from "react-intl";
import Constants from "../../../shared/utils/Constants";

export default function Blog() {
    return (
        <div>
            <Alert className="info">
                <FormattedMessage id="under_construction" defaultMessage={`${Constants.UNDER_CONSTRUCTION}`} />
            </Alert>
            <h1><FormattedMessage id="blog" defaultMessage={`${Constants.BLOG}`} /></h1>
        </div>)
}