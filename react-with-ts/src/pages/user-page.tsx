import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import List from "../components/list";
import UserItem from "../components/user-item";
import { useAction } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { getUsersList } from "../store/actions/user";
import { IUser } from "../types/types";
import { getUsers } from "../utils/api";

const UserPage: FC = () => {
  const { users, error, isLoading } = useTypedSelector((state) => state.user);
  const { getUsersList } = useAction();

  // const dispath = useDispatch();
  // const [userz, setUsers] = useState<IUser[]>([]);
  const history = useHistory();

  useEffect(() => {
    getUsersList();
    // dispath(getUsersList());
    // getUsers()
    //   .then((res) => {
    //     setUsers(res);
    //   })
    //   .catch((e) => {
    //     console.log(e.message);
    //   });
  }, []);

  if (isLoading) return <h2>LOADING</h2>;

  return (
    <div style={{ paddingTop: 20 }}>
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
