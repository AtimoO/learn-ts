import React, { FC, useEffect, useState } from "react";
import List from "../components/list";
import TodoItem from "../components/todo-item";
import { ITodo } from "../types/types";
import { getTodos } from "../utils/api";

const TodoPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    getTodos()
      .then((res) => {
        setTodos(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <List
        items={todos}
        rendetItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </>
  );
};
export default TodoPage;
