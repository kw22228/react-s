/** @jsxImportSource @emotion/react */
import { ClassNames } from '@emotion/react';

let SomeComponent = props => (
    <div className={props.wrapperClassName}>
        in the wrapper!
        <div className={props.className}>{props.children}</div>
    </div>
);

export default function EmotionClassName() {
    return (
        <>
            <ClassNames>
                {({ css, cx }) => (
                    <SomeComponent
                        wrapperClassName={css({ color: 'green' })}
                        className={css`
                            color: hotpink;
                        `}
                    >
                        from children!!
                    </SomeComponent>
                )}
            </ClassNames>
        </>
    );
}
