import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function NavBar(){
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    return(
        <Navbar
            expanded={expand}
            expand="md"
        >
            <nav>
                <Link to="/">Vu Nguyen</Link>
                <div className="right-nav">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                </div>
            </nav>
        </Navbar>
    );
}

export default NavBar;