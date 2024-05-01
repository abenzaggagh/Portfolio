import React from "react";
import './Blog.scss';

import {FormattedMessage} from "react-intl";

import Constants from "../../../shared/utils/Constants";

export default function Blog() {
    return (
        <div className={"container"}>
            <h1 className={"title"}>
                <FormattedMessage id="blog" defaultMessage={`${Constants.BLOG}`} />
            </h1>
        </div>)
}