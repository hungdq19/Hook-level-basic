import React from 'react';
import './style.scss';
import classnames from 'classnames'

function TodoList(props) {
    const { todoProps, eventParent } = props;
    const handleUserClick = (todo, index) => {
        if (!eventParent) return;
        eventParent(todo, index);
    }
    return (
        <ul>
            {todoProps.map((todo, index) => (
                //Thực hiện khi element li bị click
                <li className={classnames({ complete: todo.isComplete === "complete" })}
                    key={todo.id} onClick={() => handleUserClick(todo, index)}>{todo.notify}</li>
            ))}
        </ul>
    );
}

export default TodoList;