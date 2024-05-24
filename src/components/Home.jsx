import {Col, Row, Container} from "react-bootstrap";
import Projects from "./Projects";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import SetTitle from "./vfx/SetTitle";

function Home() {
    return(
        <section>
            <Container fluid className="home-section" id="home">
                <Row>
                    <Col md={12}>
                        <h1 className="heading-name">
                            <SetTitle />
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-socials">
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/vunguyen312"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/vu-nguyen-06972b303/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Projects />
        </section>
    );
}

export default Home;