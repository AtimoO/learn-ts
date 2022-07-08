import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import List from "../components/list";
import UserItem from "../components/user-item";
import { IUser } from "../types/types";
import { getUsers } from "../utils/api";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsers(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div style={{paddingTop: 20}}>
      <List
        items={users}
        rendetItem={(user: IUser) => (
          <UserItem
            user={user}
            key={user.id}
            onClick={() => history.push(`/users/${user.id}`)}
          />
        )}
      />
    </div>
  );
};
export default UserPage;
