import React, { useCallback } from 'react';
import CommentItem from './CommentItem';

export default function Comments(props) {
    const handleChange = useCallback(() => {
        //function memoization
        console.log('눌림');
    }, []);
    return (
        <div>
            {props.commentList.map(comment => (
                <CommentItem
                    key={comment.title}
                    title={comment.title}
                    content={comment.content}
                    likes={comment.likes}
                    onClick={handleChange}
                />
            ))}
        </div>
    );
}
