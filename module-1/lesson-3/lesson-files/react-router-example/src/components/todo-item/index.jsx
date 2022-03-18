import { useParams } from "react-router-dom";
import todoJson from "../../libs/todoData";

export default function TodoItem() {
  const params = useParams();

  //   NOTE: Get all our todos. This would be a GET method to our API.
  const todos = todoJson;
  //   NOTE: Find the todo using the URL parameter
  const currentTodo = todos.find((todo) => todo.id === params.todoId);

  return (
    <div>
      <h2>{currentTodo.title}</h2>This is one todo item {params.todoId}
    </div>
  );
}
