import { Outlet, Link } from "react-router-dom";

export default function Layout () {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/character">Character</Link>
          </li>
          <li>
            <Link to="/maze">Maze</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
