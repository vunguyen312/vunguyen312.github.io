import React from 'react';
import { Col, Row, Container } from "react-bootstrap";
import ProjectTemplate from "./ProjectTemplate";
import phantasy from "../assets/phantasy.png";
import website from "../assets/website.png";
import westonci from "../assets/westonci.png";


function Projects() {
    return(
        <Container fluid className="projects-section">
                <Row className="projects-row">
                    <Col md={4} className="project-template">
                        <ProjectTemplate
                            imgPath={phantasy}
                            title="Phantasy"
                            description="Text-based MMORPG hosted on Discord."
                            ghLink="https://github.com/vunguyen312/Phantasy-Bot-Project"
                        />
                    </Col>
                    <Col md={4} className="project-template">
                        <ProjectTemplate
                            imgPath={website}
                            title="Personal Website"
                            description="A place to showcase all my current projects and happenings."
                            ghLink="https://github.com/vunguyen312/vunguyen312.github.io"
                        />
                    </Col>
                    <Col md={4} className="project-template">
                        <ProjectTemplate
                            imgPath={westonci}
                            title="Weston CI Computer Science Club Website"
                            description="Founder/President of the CS Club."
                            ghLink="https://github.com/Weston-CI-CS-Club"
                        />
                    </Col>
                </Row>
        </Container>
    )
}

export default Projects;