import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;

    /* Color the border and text with theme.main */
    color: ${props => props.theme.color};
    border: 2px solid ${props => props.theme.borderColor};
`;

// Button.default = {
//     theme: {
//         color: 'red',
//         borderColor: 'blue',
//     },
// };

const defaultTheme = {
    color: 'blue',
    borderColor: 'blue',
};

const redTheme = {
    color: 'red',
    borderColor: 'red',
};
const greenTheme = {
    color: 'green',
    borderColor: 'green',
};

export default function StyledTheming() {
    const [theme, setTheme] = useState(defaultTheme);
    return (
        <div>
            <button onClick={() => setTheme(redTheme)}>Red</button>
            <button onClick={() => setTheme(greenTheme)}>Green</button>
            <ThemeProvider theme={theme}>
                <Button>Normal</Button>
                <Button>Themed</Button>
            </ThemeProvider>
        </div>
    );
}
