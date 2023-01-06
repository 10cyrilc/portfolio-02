import React from "react";
import "../styles/About.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <>
            <p className='heading'>About Me</p>
            <Container className="about">
                <Row className="main-about" data-aos="zoom-in" data-aos-duration="2000">
                    <Col sm>
                        <h2>About Me</h2>
                        <Row className="ab-tot">
                            <Col md={5} className="ab-i">
                                I am
                            </Col>
                            <Col className="ab-me">
                                a Computer Science Engineering Student.<br />
                                a Fast and Efficient Learner.<br />
                                a Self Taught Python & Reactjs Developer.<br />
                                currently following the FARM Stack<br />
                                working on several OpenSource Projects.<br />
                                Open to New Ideas and to Collaborate on Python and React Projects.<br />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About