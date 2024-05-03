import React, {useEffect, useState} from "react";
import {Col, Row, Container} from "react-bootstrap";
import Projects from "./Projects";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";


function SetTitle(){
    const defaultText = 'Vu Nguyen';
    const newText = 'Software Developer';
    const [text, setText] = useState(defaultText);
    const [isAnimating, setIsAnimating] = useState(false);
    const [blink, setBlink] = useState("_");

    function BlinkUnderscore(){
    
        useEffect(() => {
            const interval = setInterval(() => {
            const newState = blink === "_" ? "" : "_";
            setBlink(newState);
            }, 500);
            return () => clearInterval(interval);
        });
    
        return(blink);
    }

    const typeName = (str) => {

        if(isAnimating) return;

        let counter = 0;

        setIsAnimating(true);
        setBlink("|");

        const interval = setInterval(() => {

            setText(defaultText.substring(0, counter));

            if(counter < defaultText.length) return counter++;

            clearInterval(interval);
            setIsAnimating(false);

        }, 70);
    }

    const resetText = (str) => {
        
        if(isAnimating) return;

        let counter = str.length;

        setIsAnimating(true);
        setBlink("|");

        const interval = setInterval(() => {

            setText(str.substring(0, counter));

            if(counter > 0) return counter--;

            clearInterval(interval);
            setIsAnimating(false);
            if(str === newText) return typeName();
            typeTitle();

        }, 70);
    }

    const typeTitle = () => {
        
        if(isAnimating || text === newText) return;
        
        let counter = 1;

        setIsAnimating(true);
        setBlink("|");

        const interval = setInterval(() => {

            setText(newText.substring(0, counter));

            if(counter < newText.length) return counter++;

            clearInterval(interval);
            setIsAnimating(false);
            setTimeout(() => resetText(newText), 3000);

        }, 50);
    }
    
    const animationPlayState = text === newText ? 'paused' : 'initial';

    return(
        <span style={{animationPlayState: animationPlayState}} className="json" 
        onMouseEnter={() => resetText(defaultText)}
        >
            {text}<BlinkUnderscore />
        </span>
    );
}

function Home() {
    return(
        <section>
            <Container fluid className="home-section" id="home">
                <h1 className="heading-name">
                    <SetTitle />
                </h1>
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
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/vu-nguyen-06972b303/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="home-social-icons"
                                >
                                    <FaLinkedinIn/>
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