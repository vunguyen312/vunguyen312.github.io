import React, { useState, useEffect } from "react";
import { Row, Container } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import SkillTemplate from "./SkillTemplate";
import Arduino from "../assets/arduino.png";
import Bitbucket from "../assets/bitbucket.png";
import CSS from "../assets/css.png";
import Git from "../assets/git.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import Lua from "../assets/lua.png";
import MongoDB from "../assets/mongodb.png";
import NodeJs from "../assets/nodejs.png";
import npm from "../assets/npm.png";
import Playwright from "../assets/playwright.png";
import ReactPNG from "../assets/react.png";
import TypeScript from "../assets/typescript.png";
import Unity from "../assets/unity.png";
import VSCode from "../assets/vscode.png";

function About() {
    const [visibleItems, setVisibleItems] = useState(0);

    const updateVisibleItems = () => {
        const width = window.innerWidth;
        if(width < 700) setVisibleItems(2);
        else if(width < 1000) setVisibleItems(3);
        else if(width < 1300) setVisibleItems(4);
        else setVisibleItems(5);
    };

    useEffect(() => {
        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);
        return () => window.removeEventListener('resize', updateVisibleItems);
      }, []);
    
    
    const carouselRef = React.useRef(null);
    const [scrollTop, setScrollTop] = React.useState(false);
    let resetTimeout;

    const onNextStart = (currentItem, nextItem) => {
        if(currentItem.index !== nextItem.index) return;
        carouselRef.current.goTo(0);
    };
    const onPrevStart = (currentItem, nextItem) => {
        if(currentItem.index !== nextItem.index) return;
        setScrollTop(true);
        carouselRef.current.goTo(13);
    };
    const onNextEnd = (currentItem) => {
        console.log();
        clearTimeout(resetTimeout);
        if(
            currentItem.index < 10 & visibleItems === 5
            || currentItem.index < 11 & visibleItems === 4
            || currentItem.index < 12 & visibleItems === 3
            || currentItem.index < 13 & visibleItems === 2
        ) return;
        if(scrollTop) return setScrollTop(false);
        resetTimeout = setTimeout(() => {
            carouselRef?.current?.goTo(0);
        }, 2000);
    }

    return (
        <div>
            <Container fluid className="about-section">
                <p className="about-body">My Skills</p>
                <Row>
                    <Carousel 
                        className="skill-carousel"
                        itemsToShow={visibleItems}
                        enableAutoPlay
                        autoPlaySpeed={2000}
                        enableMouseSwipe={false}
                        ref={carouselRef}
                        onNextStart={onNextStart}
                        onNextEnd={onNextEnd}
                        onPrevStart={onPrevStart}
                        disableArrowsOnEnd={false}
                    >
                        <SkillTemplate imgPath={Arduino} title="Arduino" />
                        <SkillTemplate imgPath={Bitbucket} title="Bitbucket" />
                        <SkillTemplate imgPath={CSS} title="CSS" />
                        <SkillTemplate imgPath={Git} title="Git" />
                        <SkillTemplate imgPath={HTML} title="HTML" />
                        <SkillTemplate imgPath={JavaScript} title="JavaScript" />
                        <SkillTemplate imgPath={Lua} title="Lua" />
                        <SkillTemplate imgPath={MongoDB} title="MongoDB" />
                        <SkillTemplate imgPath={NodeJs} title="NodeJS" />
                        <SkillTemplate imgPath={npm} title="npm" />
                        <SkillTemplate imgPath={Playwright} title="Playwright" />
                        <SkillTemplate imgPath={ReactPNG} title="React" />
                        <SkillTemplate imgPath={TypeScript} title="TypeScript" />
                        <SkillTemplate imgPath={Unity} title="Unity" />
                        <SkillTemplate imgPath={VSCode} title="Visual Studio Code" />
                    </Carousel>
                </Row>
            </Container>
        </div>
    );
};

export default About;