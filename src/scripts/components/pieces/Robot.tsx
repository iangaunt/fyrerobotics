import React from "react";

export default function Robot(props: {
    name: string,
    season: number,
    description: string
}) {
    return (
        <a id={props.name}>
            <img></img>
            <h2>{props.name.charAt(0).toUpperCase() + props.name.substring(1)}</h2>
            <h3>{"(" + props.season + " season)"}</h3>
            <p>{props.description}</p>
        </a>
    )
}