import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link active">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about-me" className="nav-link active">About me</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link active">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Layout;
