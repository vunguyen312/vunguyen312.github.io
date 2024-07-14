import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function NavBar(){
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    return(
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <nav>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
            </nav>
        </Navbar>
    );
}

export default NavBar;