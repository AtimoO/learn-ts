import React, { FC } from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      key={user.id}
      style={{
        padding: 15,
        marginTop: 10,
        border: "1px solid red",
        cursor: "pointer",
      }}
    >
      {user.id}. {user.name} life in {user.address.city}
    </div>
  );
};
export default UserItem;
