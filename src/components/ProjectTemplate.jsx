import React from "react";
import {BsGithub} from "react-icons/bs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectTemplate(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Button variant="primary" href={props.ghLink} target="_blank">
                    <BsGithub/> &nbsp;
                    {"GitHub"}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectTemplate;