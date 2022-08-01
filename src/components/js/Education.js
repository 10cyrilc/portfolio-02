import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Edu } from '../data/Education'
import '../styles/Education.css'

function Education() {
    return (
        <Container>
            <Row>
                <div className="main">

                    {Edu.map((item) => (
                        <Row className="education" data-aos="fade-up">
                            <Col className="institute1">
                                <h5 data-aos="fade-right">{item.course} - {item.year}</h5>
                            </Col>
                            <Col sm className="institute2">
                                <h5 data-aos="fade-left">{item.institution}</h5>
                                <h5 data-aos="fade-left">{item.grade}</h5>
                            </Col>
                        </Row>
                    ))}
                </div>
            </Row>
        </Container>
    )
}

export default Education