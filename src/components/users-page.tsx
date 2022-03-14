import React, {FC, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";
import {IUser} from "../types/types";
import List from "./list";
import UserItem from "./user-item";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const history = useHistory();

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
        <List
            items={users}
            renderItem={(user: IUser) =>
                <UserItem
                    onClick={(user) => history.push(`/users/${user.id}`)}
                    key={user.id}
                    user={user}
                />}
        />
    );
};

export default UsersPage;
