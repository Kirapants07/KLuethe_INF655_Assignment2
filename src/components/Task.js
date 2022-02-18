import React from "react";

export default function Task({id, title, description}) {
    return (
        <div>
            {id}
            <h1>
                {title} - {description}
            </h1>
        </div>
    )
}