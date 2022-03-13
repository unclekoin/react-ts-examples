import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card, {CardVariant} from "./components/card";
import {ITodo, IUser} from "./types/types";
import List from "./components/list";
import UserItem from "./components/user-item";
import TodoItem from "./components/todo-item";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchUsers();
        fetchTodos();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e) {
            alert(e);
        }
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <Card onClick={(num) => console.log("Click!", num)} variant={CardVariant.outlined} width="200px"
                  height="200px">
                <button>Button</button>
            </Card>
            <List
                items={users}
                renderItem={(user: IUser) => <UserItem key={user.id} user={user} /> }
            />
            <List
                items={todos}
                renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} /> }
            />
        </div>
    );
};

export default App;

