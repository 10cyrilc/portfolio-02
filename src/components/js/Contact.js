import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/Contact.css"
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FaLinkedinIn, FaGithub, FaTwitter, FaTelegramPlane } from "react-icons/fa";

function Contact() {
    const form = useRef();
    const [show, setShow] = useState(true)
    const [text, setText] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h93tz5j', 'template_fvhuhxc', form.current, 'hUmSNYA70jdIOd8Kd')
            .then((result) => {
                setShow(false)
                setText("Message Sent Successfully");
            }, (error) => {
                setShow(false)
                setText("Error Sending Messages Try Again");
            });
    }

    return (
        <Container>
            <Row className="menu">
                {show ? <Col className="form-col" data-aos="fade-up">
                    <Form ref={form} onSubmit={sendEmail}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Name:"
                            className="mb-3"
                        >
                            <Form.Control placeholder="Name:" name="from_name" required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email:"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com:" name="from_email" required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Subject:"
                            className="mb-3"
                        >
                            <Form.Control placeholder="Subject:" name="subject" required />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Message:"
                            className="mb-3"
                        >
                            <Form.Control as="textarea" label="Message" style={{ height: '150px' }} name="message" placeholder="Message:" required />
                        </FloatingLabel>
                        <div className='btn-sub'>
                            <Button variant="outline-dark" type='send' value="Send">Send</Button>
                        </div>
                    </Form>
                </Col>
                    :
                    <Col className="response">
                        {text}
                    </Col>}
            </Row>
            <Row className="social">
                <Social link="https://www.linkedin.com/in/10cyrilc/" ico={<FaLinkedinIn />} />
                <Social link="https://www.github.com/10cyrilc/" ico={<FaGithub />} />
                <Social link="https://www.twitter.com/10cyrilc/" ico={<FaTwitter />} />
                <Social link="https://t.me/10cyrilc/" ico={<FaTelegramPlane />} />
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

export default Contact