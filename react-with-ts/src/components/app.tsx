import React, { useEffect, useState } from "react";
import { IUser } from "../types/types";
import { getUsers } from "../utils/api";
import Card, { CardColor } from "./card";
import UserList from "./user-list";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

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
    <>
      <Card
        width="150px"
        height="150px"
        background={CardColor.green}
        onClick={(a) => {
          console.log(a);
        }}
      >
        <button>Btn</button>
      </Card>
      <UserList users={users} />
    </>
  );
}

export default App;
