import React from "react";

export const Bubbles = () =>
    (<div className="bubbles">
        {[...Array(30)].map((x, i) =>
            <div className="bubble" key={i}> </div>
        )}
    </div>);