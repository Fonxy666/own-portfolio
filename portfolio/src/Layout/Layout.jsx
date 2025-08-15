import { Link, scroller } from "react-scroll";
import { StyledUl } from "../Styles/HomePage.Styled";

const Layout = () => {
    const scrollTo = (id) => {
        scroller.scrollTo(id, {
        smooth: true,
        duration: 10,
        offset: -100,
        });
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <StyledUl className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link onClick={() => scrollTo("0")} style={{ cursor: "pointer" }} to="0" activeClass="active" className="nav-link text-white">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => scrollTo("1")} style={{ cursor: "pointer" }} to="1" className="nav-link text-white">Recent Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={() => scrollTo("2")} style={{ cursor: "pointer" }} to="2" className="nav-link text-white">Contact Me</Link>
                        </li>
                    </StyledUl>
                </div>
            </div>
        </nav>
    );
};

export default Layout;
