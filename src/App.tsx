import './App.css'
import {TodoList} from "./components/TodoList";
import {useEffect, useState} from "react";
import queryString from 'query-string';
import {PostList} from "./components/PostList";
import {Pagination} from "./components/Pagination";
import {PostFiltersForm} from "./components/PostFiltersForm";
import {Clock} from "./components/Clock";

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

    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({  _page: 1, _limit: 10, _totalRows: 1});
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
        searchTerm: ''
    });

    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramsString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();
                console.log({responseJSON});
                const {data, pagination} = responseJSON;
                setPostList(data);
                setPagination(pagination)
            } catch (e) {
                console.log('Failed to fetch post list', e);
            }

            console.log('Post list effect');
        }

        fetchPostList();
    }, [filters]);

    useEffect(() => {
        console.log('Todo list effect');
    });

    function handlePageChange(newPage: any) {
        console.log('newPage', newPage)
        setFilters({
            ...filters,
            _page: newPage
        });
    }

    function handleFiltersChange(newFilters: any) {
        console.log('newFilters', newFilters)
        setFilters({
            ...filters,
            _page: 1,
            searchTerm: newFilters.searchTerm
        });
    }
    return (
       <div>
           <Clock />
           <PostFiltersForm onSubmit={handleFiltersChange}/>
           {/*<TodoForm onSubmit={handleFormSubmit}/>*/}
           {/*<TodoList todos={todoList} onTodoClick={handleTodoClick}/>*/}
           <PostList posts={postList} />
           <Pagination pagination={pagination} onPageChange={handlePageChange}/>
       </div>
    );
}

export default App
