import PropTypes from "prop-types";

TodoList.prototype = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func
}

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null
}

export function TodoList(props: any) {
    const {todos, onTodoClick} = props;

    function handleTodoClick(todo: any) {
        if (onTodoClick) {
            onTodoClick(todo)
        }
    }
    console.log('tod', todos)
    return (
        <div>
            <ul>
                {
                    todos.map((todo: any) => (<li key={todo.id} onClick={()=>handleTodoClick(todo)}>{todo.title}  ----- </li>))
                }
            </ul>
        </div>
    );
}
