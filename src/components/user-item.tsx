import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{
            marginBottom: 5,
            padding: 15,
            border: '1px solid grey',
            cursor: 'pointer'
        }}>
            {user.id}. {user.name} - {user.address.zipcode} {user.address.city} {user.address.street}
        </div>
    );
};

export default UserItem;
