import React, { useState } from "react";
import axios from "axios";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "名前が入ります。",
  hobbies: ["あああ", "いいい"],
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const onClickFetchData = () => {
    axios
      .get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="app">
      <Text color="red" fontSize="18px" />
      <UserProfile user={user} />
      <button onClick={onClickFetchData}>ボタン</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          userId={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default App;
