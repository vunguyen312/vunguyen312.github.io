import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import "../styles.css";

function About() {
    return (
        <Container fluid className="about-section" id="about">
            <Row>
                <Col>
                <h1 className="status-text">
                    STATUS: OPERATIONAL
                </h1>
                <p className="status-info">
                    Currently attending: <span style={{color: "blue"}}>WESTON COLLEGIATE INSTITUTE</span>
                    <br/>

                </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;