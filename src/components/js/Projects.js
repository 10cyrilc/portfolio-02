import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Projects.css";
import { Work } from "../data/Projects.js"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


function Projects() {
    return (
        <>
            <p className='heading'>Projects Done</p>
            <Container id="container">
                <Row className='containe'>
                    {Work.map((item) => (
                        <Cards key={item.id} name={item.name} para={item.para} frameworks={item.framework} images={item.imag} />
                    ))}
                </Row>


            </Container>
        </>
    )

}

function Cards(props) {
    return (
        <div className="card1">
            <div className="imgBx">
                <img src={props.images} alt={props.name} />
            </div>
            <div className="content1">
                <h2>{props.name}</h2>
                <p>{props.para}</p>
            </div>
            <div className="content2">
                <p>{props.frameworks.map((frameowrk) => {
                    return (
                        <img src={frameowrk} width="30px" alt={props.name} />
                    )
                })}</p>
            </div>
        </div>
    )
}

export default Projects