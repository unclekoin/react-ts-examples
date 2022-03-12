import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{marginBottom: 5, padding: 15, border: '1px solid grey'}}>
            {user.id}. {user.name} - {user.address.zipcode} {user.address.city} {user.address.street}
        </div>
    );
};

export default UserItem;
