import React, { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { IUser } from "../types/types";
import { getUser } from "../utils/api";

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const history = useHistory();

  useEffect(() => {
    getUser(params.id)
      .then((res) => {
        setUser(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <div style={{ paddingTop: 20 }}>
      <button onClick={() => history.goBack()}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <p>Email: {user?.email}</p>
      <p>
        Адрес:{" "}
        {`${user?.address.city}, ${user?.address.street}, ${user?.address.zipcode}`}
      </p>
    </div>
  );
};
export default UserItemPage;
