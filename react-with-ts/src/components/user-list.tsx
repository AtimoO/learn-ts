import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./user-item";

interface IUserListProps {
  users: IUser[];
}

const UserList: FC<IUserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};
export default UserList;
