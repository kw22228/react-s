import React, { useState, memo, useMemo, Profiler } from 'react';
import './CommentItem.css';

function CommentItem(props) {
    const [clickCount, setClickCount] = useState(0);

    function onRenderCallback( //React docs에 Profiler API 검색.
        id, // 방금 커밋된 Profiler 트리의 "id"
        phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
        actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
        baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간
        startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
        commitTime, // React가 해당 업데이트를 언제 커밋했는지
        interactions // 이 업데이트에 해당하는 상호작용들의 집합
    ) {
        console.log(`${props.title}: ${actualDuration}`);
    }

    const handleClick = () => {
        props.onClick();
        setClickCount(prev => prev + 1);
        alert(`${props.title}: 눌림`);
    };

    const rate = useMemo(() => {
        //handleClick 이벤트가 일어날때 컴포넌트가 재랜더링 되면서 rate check까지 같이됨.
        //이때 useMemo 해준다.
        console.log('rate check');
        return props.likes > 10 ? 'Good' : 'Bad';
    }, [props.likes]);

    return (
        <Profiler id="CommentItem" onRender={onRenderCallback}>
            <div className="CommentItem" onClick={handleClick}>
                <span>{props.title}</span>
                <span>{props.content}</span>
                <span>{props.likes}</span>
                <span>{rate}</span>
                <span>{clickCount}</span>
            </div>
        </Profiler>
    );
}

export default memo(CommentItem);
//export default CommentItem;
