import React, { useState } from 'react';
import TodoList from './component/Todolist';


function TodoFeatue(props) {
    // Khai báo data để truyền xuống cho component con
    const data = [
        {id: 1, notify:"Học về hook", isComplete: false },
        {id: 2, notify:"Học về javascripts", isComplete: false },
        {id: 3, notify:"Học về Node JS", isComplete: false }
    ]
    const [todos, setTodos] = useState(data);
    const handleClick = (todoItem, index) =>{
        console.log(todos)
        //clone ra mang moi
        const newTodo = [...todos];
        // Xử lí 
        const newTodoList = {
            ...newTodo[index],
            isComplete: !newTodo[index].isComplete
        }
        newTodo[index] = newTodoList;
        setTodos(newTodo)
    }
    return (
        <div>
            <h1>COMPONENT-TODOLIST</h1>
            {/* {todoProps} chính là cái Props được truyền xuống component todolist  */}
            <TodoList todoProps={todos} eventParent={handleClick}/>
        </div>
    );
}

export default TodoFeatue;