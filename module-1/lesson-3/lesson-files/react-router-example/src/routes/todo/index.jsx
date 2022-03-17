import Heading from "../../components/layouts/Heading";
import todoJson from "../../libs/todoData";

import { Link, Outlet } from "react-router-dom";

export default function Todo() {
  const todos = todoJson;

  return (
    <div>
      <Heading title="todos" />

      <section>
        {todos.map((todo) => {
          return (
            <Link to={`/todos/${todo.id}`} key={todo.id}>
              {todo.title}
            </Link>
          );
        })}
      </section>

      <section>
        <Outlet />
      </section>
    </div>
  );
}
