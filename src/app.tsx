import React, {useEffect, useState} from 'react';
import axios from "axios";
import Card, {CardVariant} from "./components/card";
import UserList from "./components/user-list";
import {IUser} from "./types/types";

const App = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
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
            <UserList users={users}/>
        </div>
    );
};

export default App;

