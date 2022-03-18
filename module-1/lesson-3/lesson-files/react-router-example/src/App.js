import "./App.css";

import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Todos from "./routes/todos";

import Story from "./components/story";
import Profile from "./components/profile";
import TodoItem from "./components/todo-item";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
              fontWeight: isActive ? "bold" : "normal",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <br />
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
              fontWeight: isActive ? "bold" : "normal",
            };
          }}
          to="/about"
        >
          about
        </NavLink>
        <br />
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
              fontWeight: isActive ? "bold" : "normal",
            };
          }}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
              fontWeight: isActive ? "bold" : "normal",
            };
          }}
          to="/todos"
        >
          Todo
        </NavLink>
      </nav>

      <main>
        <p>This never changes</p>
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
      </main>
    </div>
  );
}

export default App;
