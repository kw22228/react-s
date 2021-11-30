/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const P = props => (
    <p
        css={{
            margin: 0,
            fontSize: 12,
            lineHeight: '1.5',
            fontFamily: 'Sans-Serif',
            color: 'black',
        }}
        {...props} // <- props contains the `className` prop
    />
);

const ArticleText = props => (
    <P
        css={{
            fontSize: 14,
            fontFamily: 'Georgia, serif',
            color: 'darkgray',
        }}
        {...props} // <- props contains the `className` prop
    />
);

const danger = css`
    color: red;
`;

const base = css`
    background-color: yellow;
    color: turquoise;
`;

export default function EmotionOverride() {
    return (
        <>
            <P>PPPP</P>
            <ArticleText>OVERRIDE</ArticleText>
            <br />
            <br />
            <div>
                <div css={base}>This will be turquoise</div>
                <div css={[danger, base]}>
                    This will be also be turquoise since the base styles
                    overwrite the danger styles.
                </div>
                <div css={[base, danger]}>This will be red</div>
            </div>
        </>
    );
}
