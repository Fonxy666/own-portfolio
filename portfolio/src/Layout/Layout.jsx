import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="Layout">
      <nav>
        <ul>
          {location.pathname !== "/" && (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}
          {location.pathname !== "/about-me" && (
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
          )}
          {location.pathname !== "/contact" && (
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          )}
        </ul>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Layout;
