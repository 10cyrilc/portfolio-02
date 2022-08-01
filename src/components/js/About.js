import React from "react";
import "../styles/About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function About(){
    return(
        <Container className="about">
            <Row className="main-about" data-aos="zoom-in" data-aos-duration="2000">
                <Col sm>
                    <h2>About Me</h2>
                    <p> I am a Computer Science Engineering Student.
                        I am a Fast and Efficient Learner.
                        I am a Self Taught Python & Reactjs Developer.
                        I am working on several OpenSource Projects.
                        I am Open to New Ideas and to Collaborate on Projects.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About