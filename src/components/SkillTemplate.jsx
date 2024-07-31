import React from "react";
import Card from "react-bootstrap/Card";

function SkillTemplate(props) {
    return (
        <Card className="skill-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default SkillTemplate;