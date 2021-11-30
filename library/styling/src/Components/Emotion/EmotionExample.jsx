/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const color = 'white';

const Button = styled.button`
    padding: 32px;
    background-color: hotpink;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
        color: white;
    }
`;

const style = css`
    color: hotpink;
`;

const SomeComponent = ({ children }) => (
    <div css={style}>
        Some hotpink text.
        {children}
    </div>
);

const anotherStyle = css({
    textDecoration: 'underline',
});

const AnotherComponent = () => (
    <div css={anotherStyle}>Some text with an underline.</div>
);

export default function EmotionExample() {
    return (
        <>
            <div>
                <div
                    css={css`
                        padding: 32px;
                        background-color: hotpink;
                        font-size: 24px;
                        border-radius: 4px;
                        &:hover {
                            color: ${color};
                        }
                    `}
                >
                    Hover to change color.
                </div>
            </div>
            <br />
            <Button>Hello</Button>
            <br />
            <SomeComponent>
                <AnotherComponent />
            </SomeComponent>
        </>
    );
}
