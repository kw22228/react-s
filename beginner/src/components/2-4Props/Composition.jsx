import React from 'react'

const Welcome = (props) => {
    return (
        <h1>
            Hello, {props.name}
        </h1>
    );
}

export default function Composition() {
    return (
        <div>
            <Welcome name="jaewon"/>
            <Welcome name="jimmy"/>
            <Welcome name="amy"/>
            <Welcome name="tommy"/>
        </div>
    )
}
