import { Link, Outlet } from "react-router-dom";
import Heading from "../../components/layouts/Heading";

export default function About() {
  return (
    <div>
      <Heading title="about" />
      <Link to="story">Story</Link>
      <br />
      <Link to="profile">Profile</Link>
      <p>I'm the dopest neck beard in the world</p>

      <Outlet />
    </div>
  );
}
