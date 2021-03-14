import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from '../../component/Todolist/index';

function Listpage(props) {
    const button = {
        padding: '10px',
        margin: '10px 10px',

        backgroundColor: 'deppink',
        color: '#051937',

        borderRadius: '20px',
        outline: 0,

        fontSize: '15px',

        cursor: 'pointer',
    };
    // Khai báo data để truyền xuống cho component con
    const data = [
        { id: 1, notify: 'Học về hook', isComplete: 'complete' },
        { id: 2, notify: 'Học về javascripts', isComplete: 'new' },
        { id: 3, notify: 'Học về Node JS', isComplete: 'complete' },
    ];
    // Khai báo các routing hook
    const location = useLocation(); // Xử lí queryPram
    const math = useRouteMatch(); // Xử lí Path đường dẫn
    const history = useHistory(); // Xử lí trên Ủl Param

    const [todos, setTodos] = useState(data);
    // Lấy thông tin ban đầu trên location để set state cho filter nếu không
    // có thì set cho bằng all
    const [filter, setFilter] = useState(() => {
        const query = queryString.parse(location.search);
        return query.isComplete || 'all';
    });

    const handleClick = (todoItem, index) => {
        //clone ra mang moi
        const newTodo = [...todos];
        // Xử lí vị trị element được click
        const newTodoList = {
            ...newTodo[index],
            isComplete:
                newTodo[index].isComplete === 'complete'
                    ? 'new'
                    : 'complete',
        };
        // Thay thế chỗ bị click vào newTodo
        newTodo[index] = newTodoList;
        setTodos(newTodo);
    };

    useEffect(() => {
        //Set lại state filter khi mà location thay đổi
        const params = queryString.parse(location.search);
        setFilter(params.isComplete || 'all');
    }, [location.search]);

    const hanldeFilterComplete = () => {
        // Update lên URL dạng ?isComplet = data
        const params = { isComplete: 'complete' };
        history.push({
            pathname: math.path,
            search: queryString.stringify(params),
        });
    };
    const handleNotComplete = () => {
        // Update lên URL dạng ?isComplet = data
        const params = { isComplete: 'new' };
        history.push({
            pathname: math.path,
            search: queryString.stringify(params),
        });
    };
    const handleShowAll = () => {
        // Update lên URL dạng ?isComplet = data
        const params = { isComplete: 'all' };
        history.push({
            pathname: math.path,
            search: queryString.stringify(params),
        });
    };
    const filterStatus = todos.filter((todo) => {
        return filter === "all" || filter === todo.isComplete;
    });
    return (
        <div>
            <h1>COMPONENT-TODOLIST-LISTPAGE</h1>
            {/* {todoProps} chính là cái Props được truyền xuống component todolist  */}
            <TodoList
                todoProps={filterStatus}
                eventParent={handleClick}
            />
            <button style={button} onClick={hanldeFilterComplete}>
                Hoan Thanh
            </button>
            <button style={button} onClick={handleNotComplete}>
                Chua Hoan Thanh
            </button>
            <button style={button} onClick={handleShowAll}>
                Show ALl
            </button>
        </div>
    );
}

export default Listpage;
