import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound  from "../images/not-found.svg"
import "../styles/PageNotFound.css"


function PageNotFound() {
    return (
        <Container>
            <Row >
              <Col className="main-body">
                    <img src={NotFound} alt="Not Found" />
                    <p>Page Not Found</p>
                </Col>
            </Row>
        </Container>
    )
}

export default PageNotFound