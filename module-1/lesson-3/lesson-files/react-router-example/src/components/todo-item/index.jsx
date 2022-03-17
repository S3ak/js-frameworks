import { useParams } from "react-router-dom";

export default function TodoItem() {
  const params = useParams();

  return <div>This is one todo item {params.todoId}</div>;
}
