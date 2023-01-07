import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Libraries.css";
import { Frame } from "../data/Libraries.js"

function Frameworks() {
    return (
        <>
            <p className='heading'>Known Libraries and FrameWorks</p>
            <Container id="contani">
                <Row className='contai'>
                    {Frame.map((item) => (
                        <Card imag={item.imag} name={item.name} para={item.para} />
                    ))}
                </Row>
            </Container>
        </>
    )
}


function Card(props) {
    return (
        <Col className='column-content' data-aos="flip-left" data-aos-duration="1000">
            <div className='card'>
                <div className='face face1'>
                    <div className='content'>
                        <img src={props.imag} alt={props.name} />
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