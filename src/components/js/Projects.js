import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Projects.css";
import { Work } from "../data/Projects.js"


function Projects() {
    return (

        <Container id="container">
            <Row className='containe'>
                {Work.map((item) => (
                    <Cards id={item.id} name={item.name} para={item.para} code={item.code} demo={item.demo} demoT={item.demoT} />
                ))}


            </Row>
        </Container>
    )

}

function Cards(props) {
    return (
        <Col className="box" data-aos="zoom-in">
            <div className="icon">{props.id}</div>
            <div className="content">
                <h3>{props.name}</h3>
                <p>{props.para}</p>
                <a href={props.code} target="_blank" rel="noopener noreferrer">Source Code</a><br />
                {props.demoT?
                <a href={props.demo} target="_blank" rel="noopener noreferrer">Demo</a>:null
                }
            </div>
        </Col>

    )
}

export default Projects