import React from 'react'

  function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Avatar(props){
      return (
        <img
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
      )
  }
  function UserInfo(props){
      return (
        <div className="UserInfo">

            <Avatar user={props.user} />

            <div className="UserInfo-name">
            {props.user.name}
            </div>

        </div>
      )
  }
  function CommentDate(props){
      return (
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      )
  }
  function CommentText(props){
      return (
        <div className="Comment-text">
            {props.text}
        </div>
      )
  }
  function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author}/>
        <CommentText text={props.text}/>
        <CommentDate date={props.date} />
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'react study place by KJW',
    author: {
      name: 'Hello Jaewon!!',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  
export default function Extraction(props) {
    return (
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    )
}
