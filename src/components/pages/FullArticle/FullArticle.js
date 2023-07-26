import React from "react";

export default function FullArticle(props) {
    return (
        <div className="container">
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    )
}