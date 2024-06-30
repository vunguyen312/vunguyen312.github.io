import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

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
            <Container>
                <Link to="/">
                    <p className="home-button">Home</p>
                </Link>
            </Container>
        </Navbar>
    );
}

export default NavBar;