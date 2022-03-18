import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Todos from "./routes/todos";

import Story from "./components/story";
import Profile from "./components/profile";
import TodoItem from "./components/todo-item";

import Layout from "./layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route path="story" element={<Story />} />

          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/contact" element={<Contact />} />

        <Route path="/todos" element={<Todos />}>
          <Route path=":todoId" element={<TodoItem />} />
        </Route>

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Layout>
  );
}

export default App;
