import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <Link className="home-button" to="/">vunguyen.dev</Link>
            <div className="right-nav">
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </nav>
    );
}

export default NavBar;