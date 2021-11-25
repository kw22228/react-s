import React from 'react';
import styled from 'styled-components';

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    color: blue;

    &:hover {
        color: red; // <Thing> when hovered
    }

    & ~ & {
        background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
    }

    & + & {
        background: lime; // <Thing> next to <Thing>
    }

    /* &.something {
        background: orange; // <Thing> tagged with an additional CSS class ".something"
    } */

    .something-else & {
        border: 1px solid; // <Thing> inside another element labeled ".something-else"
    }
`;

const Input = styled.input.attrs(props => ({
    type: 'text',
    size: props.size || '1em',
}))`
    border: 2px solid palevioletred;
    margin: ${props => props.size};
    padding: ${props => props.size};
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
    type: 'password',
})`
    // similarly, border will override Input's border
    border: 2px solid aqua;
`;

export default function StyledNesting() {
    return (
        <>
            <Thing>Hello world!</Thing>
            <Thing>How ya doing?</Thing>
            <Thing className="something">The sun is shining...</Thing>
            <div>Pretty nice day today.</div>
            <Thing>Don't you think?</Thing>
            <div className="something-else">
                <Thing>Splendid.</Thing>
            </div>

            <br />
            <br />
            <Input placeholder="A bigger text input" size="2em" />
            <br />
            {/* Notice we can still use the size attr from Input */}
            <PasswordInput placeholder="A bigger password input" size="2em" />
        </>
    );
}
