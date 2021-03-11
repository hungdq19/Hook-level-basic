import React, { useState } from 'react';
import TodoList from './component/Todolist';


function TodoFeatue(props) {
    const button ={
        padding: '10px',
        margin: '10px 10px',

        backgroundColor: "deppink",
        color: "#051937",

        borderRadius: "20px",
        outline: 0,

        fontSize: "15px"


    }
    // Khai báo data để truyền xuống cho component con
    const data = [
        {id: 1, notify:"Học về hook", isComplete: false },
        {id: 2, notify:"Học về javascripts", isComplete: false },
        {id: 3, notify:"Học về Node JS", isComplete: false }
    ]
    const [todos, setTodos] = useState(data);
    const[filter, setFilter] = useState('all')
    const handleClick = (todoItem, index) =>{
        //clone ra mang moi
        const newTodo = [...todos];
        // Xử lí vị trị element được click
        const newTodoList = {
            ...newTodo[index],
            isComplete: !newTodo[index].isComplete
        }
        // Thay thế chỗ bị click vào newTodo
        newTodo[index] = newTodoList;
        setTodos(newTodo)
    }

    const hanldeFilterComplete = () =>{
        setFilter(true)

    }
    const handleNotComplete =() =>{
        setFilter(false)

    }
    const handleShowAll = () =>{
        setFilter('all')
    }
    const filterStatus = todos.filter(todo =>{
        return filter === 'all' || filter === todo.isComplete;
    });

    
    return (
        <div>
            <h1>COMPONENT-TODOLIST</h1>
            {/* {todoProps} chính là cái Props được truyền xuống component todolist  */}
            <TodoList todoProps={filterStatus} eventParent={handleClick}/>
            <button style={button} onClick={hanldeFilterComplete}>Hoan Thanh</button>
            <button style={button} onClick={handleNotComplete}>Chua Hoan Thanh</button>
            <button style={button} onClick={handleShowAll}>Show ALl</button>
        </div>
    );
}

export default TodoFeatue;