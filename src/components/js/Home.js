import React from "react";
import "../styles/Home.css"
// import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (

        <Container className="home">
            <Row>
                <Col lg>
                    <Row className="image">
                        <img src="https://picsum.photos/500/400" data-aos="flip-left" alt="portrait" />
                    </Row>
                    <div className="black-rect" data-aos="fade-left"></div>
                </Col>
                <Col lg className="text">
                    <Row data-aos="fade-left">
                        <h1 className="name">Cyril C Thomas</h1>
                        <h2 className="dev">Pythonista | React Developer</h2>
                    <Row className="social">
                        <Social link="https://www.linkedin.com/in/10cyrilc/" ico={<FaLinkedinIn />} />
                        <Social link="https://www.github.com/10cyrilc/" ico={<FaGithub />} />
                        <Social link="https://www.twitter.com/10cyrilc/" ico={<FaTwitter />} />
                        <Social link="https://t.me/10cyrilc/" ico={<FaTelegramPlane />} />
                    </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

function Social(props) {
    return (
        <Col xs lg="1">
            <a href={props.link} target="__blank" rel="noreferrer">
                {props.ico}
            </a>
        </Col>
    )
}

export default Home