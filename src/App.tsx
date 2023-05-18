import './App.css'
import {TodoList} from "./components/TodoList";
import {useState} from "react";
import {TodoForm} from "./components/TodoForm";

function App() {
    const [todoList, setTodoList] = useState( [
        {
            id: 1,
            title: 'ABC'
        },
        {
            id: 2,
            title: 'ABC 2'
        },
        {
            id: 3,
            title: 'ABC 3'
        }
    ]);

    const handleTodoClick = (todo: any) => {
        console.log('Handle todo Click', todo)
        const index = todoList.findIndex(x => x.id === todo.id);
        if (index < 0) return;

        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    const handleFormSubmit = (todo: any) => {
        console.log('todo lis', todo)
        const newTodo = {
            id: todoList.length + 1,
            ...todo
        }
        const newTodoList = [...todoList];
        newTodoList.push(newTodo);
        console.log('newTodoList', newTodoList)
        setTodoList(newTodoList);
    }
    return (
       <div>
           <TodoForm onSubmit={handleFormSubmit}/>
           <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
       </div>
    );
}

export default App
