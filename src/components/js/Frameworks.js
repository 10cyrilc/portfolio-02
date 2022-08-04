import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Framework.css";
import { Frame } from "../data/Framework.js"

function Frameworks() {
    return (
        <Container id="contani">
            <Row className='contai'>   
                {Frame.map((item) =>(
                    <Card imag={item.imag} name={item.name} para={item.para} />
                ))}
            </Row>
        </Container>
    )
}


function Card(props) {
    return (
        <Col className='column-content' data-aos="flip-left">
        <div className='card'>
            <div className='face face1'>
                <div className='content'>
                    <img src={props.imag} alt="codes" />
                    <h3>{props.name}</h3>
                </div>
            </div>
            <div className='face face2'>
                <div className='content'>
                    <p>{props.para}</p>
                </div>
            </div>
        </div>
        </Col>
    )
}

export default Frameworks