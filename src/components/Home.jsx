import { Col, Row, Container } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import CSIcon from "../assets/csgraphic.png";
import SetTitle from "./vfx/SetTitle";
import FadeIn from "./vfx/FadeIn";

function Home() {
    return(
        <section>
            <Container fluid className="home-section" id="home">
                <Row>
                    <h1 className="heading-name">
                        <SetTitle />
                    </h1>
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
                <FadeIn>
                    <div className="home-about-description">
                        <Row>
                            <Col md={8}>
                                <h2 className="home-about-title">About Me</h2>
                                <p className="home-about-body">
                                    Hi, my name is Vu Nguyen. I'm a software developer based in Toronto, Ontario. 
                                    <br />
                                    <br />
                                    Currently, I'm in 12th grade and I'm looking to pursue a career in software development. I have experience with web development, game development, and software development dating back to when I was 7 years old. 
                                    <br />
                                    <br />
                                    Making software has always been my passion, and I'm here to share it with the world!
                                </p>
                            </Col>
                            <Col md={4}>
                                <img src={CSIcon} alt="CS Icon" className="home-about-image"/>
                            </Col>
                        </Row>
                    </div>
                </FadeIn>
                <div className="white-space"></div>
            </Container>
        </section>
    );
}

export default Home;