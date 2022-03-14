import React, {FC, useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import axios from "axios";
import {IUser} from "../types/types";

interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {
    const params = useParams<UserItemPageParams>();
    const history = useHistory();
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            setUser(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <button
                onClick={() => history.push('/users')}
                style={{cursor: 'pointer'}}
            >
                Back
            </button>
            <h1>User Page: {user?.name}</h1>
            <div>{user?.email}</div>
            <div>{user?.address.zipcode} {user?.address.city} {user?.address.street}</div>
        </div>
    );
};

export default UserItemPage;
