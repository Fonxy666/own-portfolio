import { Link, scroller } from "react-scroll";

const Layout = () => {
  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      smooth: true,
      duration: 10,
      offset: -90,
    });
  }

  return (
    <div>
      <nav className="navbar navbar-expand">
          <ul className="navbar-nav">
            <li className="nav-tem">
              <Link onClick={() => scrollTo("0")} to="0" activeClass="active" className="nav-link text-white">About Me</Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => scrollTo("1")} to="1" className="nav-link text-white">Recent Projects</Link>
            </li>
            <li className="nav-item">
              <Link onClick={() => scrollTo("2")} to="2" className="nav-link text-white">Contact Me</Link>
            </li>
          </ul>
      </nav>
    </div>
  );
};

export default Layout;
