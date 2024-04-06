import React, {useEffect, useState} from "react";
import {Col, Row, Container} from "react-bootstrap";
import About from "./About";
import "../styles.css";

function BlinkUnderscore(){
    const [blink, setBlink] = useState("_");

    useEffect(() => {
        const interval = setInterval(() => {
        const newState = blink === "_" ? "" : "_";
        setBlink(newState);
        }, 500);
        return () => clearInterval(interval);
    });

    return(blink);
}

function SetTitle(){
    const defaultText = 'Vu Nguyen';
    const newText = 'Software Developer';
    const [text, setText] = useState(defaultText);
    const [isAnimating, setIsAnimating] = useState(false);

    const resetText = () => {

        if(isAnimating) return;

        let counter = newText.length;

        setIsAnimating(true);

        const interval = setInterval(() => {

            setText(newText.substring(0, counter));

            if(counter > 0) return counter--;

            clearInterval(interval);
            setText(defaultText);
            setIsAnimating(false);

        }, 50);
    }

    const mouseEnter = () => {

        if(isAnimating || text === newText) return;

        let counter = 1;

        setIsAnimating(true);

        const interval = setInterval(() => {

            setText(newText.substring(0, counter));

            if(counter < newText.length) return counter++;

            clearInterval(interval);
            setIsAnimating(false);

        }, 75);
    }
    
    const animationPlayState = text === newText ? 'paused' : 'initial';

    return(
        <span style={{animationPlayState: animationPlayState}} className="json" 
        onMouseEnter={mouseEnter}
        onMouseLeave={resetText}
        >
            {text}
        </span>
    );
}

function Home() {
    return(
        <section>
            <Container fluid className="home-section" id="home">
                <Row>
                    <Col md={1} className="home-header">
                        <h1 className="heading-name">
                            <span className="name">
                                <SetTitle /><BlinkUnderscore />
                            </span>
                        </h1>
                    </Col>
                </Row>
            </Container>
            <About />
        </section>
    );
}

export default Home;