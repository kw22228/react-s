import React from 'react';
import './Example.scss';
export default function Example() {
    return (
        <>
            <p>Example</p>
            <p className="font">Example</p>
            <p className="Text">Text</p>
            <hr />
            <nav>
                <ul>
                    <li>123</li>
                    <li></li>
                </ul>
            </nav>
            <ul>
                <li>123</li>
                <li></li>
            </ul>
            <p className="base">Base.</p>
            <p className="inverse">Inverse</p>
            <hr />
            <p className="info">Info</p>
            <p className="alert">Alert</p>
            <p className="success">Success</p>
            <hr />
            <p className="message">message</p>
            <p className="success2">success2</p>
            <p className="error">error</p>
            <p className="warning">warning</p>
            <hr />
            <div className="square-av"></div>
            <div className="circle-av"></div>
        </>
    );
}
