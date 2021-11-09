import React from 'react'

export default function List() {
    const todos = [
        {id: 1, text: 'Drink Water'},
        {id: 2, text: 'Wash Car'},
        {id: 3, text: 'Listen Lecture'},
        {id: 4, text: 'Playing Game'},
        {id: 5, text: 'Go to bed'}
    ];

    const Item = (props) => {
        return <li>{props.text}</li>;
    }

    const todoList = todos.map((todo) => {
        return <Item key={todo.id} {...todo} />; //key값은 props로 받아서 쓸 수 없다.
    })

    return (
        <ul>
            {todoList}
        </ul>
    )
}
