/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';

export default function EmotionMediaQuery() {
    return (
        <>
            <Global //글로벌 styled
                styles={css`
                    p {
                        color: hotpink !important;
                    }
                `}
            />

            <p
                css={css`
                    font-size: 30px;
                    @media (min-width: 500px) {
                        font-size: 50px;
                    }
                `}
            >
                Some text!
            </p>
        </>
    );
}
