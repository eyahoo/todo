import { IListItem } from "interfaces/IList";
import { useState } from "react";
import { List, Input } from "./components";

function App() {
  const [todoState, setTodoState] = useState<IListItem[]>([
    { isDone: true, value: "test" },
    { isDone: false, value: "test2" },
  ]);
  const addTodo = (todo: string) => {
    setTodoState(prev => {
      if (prev.length > 0) {
        return [
          ...prev,
          {
            isDone: false,
            value: todo,
          },
        ];
      } else {
        return [
          {
            isDone: false,
            value: todo,
          },
        ];
      }
    });
  };
  return (
    <div>
      <h1>Todo List</h1>
      <Input addTodo={addTodo}></Input>
      <List todoData={todoState}></List>
    </div>
  );
}

export default App;
