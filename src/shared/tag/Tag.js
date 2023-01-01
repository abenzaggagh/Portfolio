import './Tag.scss';

import React from "react";

export default function Tag(props) {

    return(<div className="tag">
        {props && props.value}
    </div>);

}

