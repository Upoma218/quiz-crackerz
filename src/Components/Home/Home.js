import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from './heroImage.jpg'
import './Home.css'


const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='heroImg'><Image fluid src={logo}></Image></Col>
                    <Col>2 of 2</Col>
                </Row>

            </Container>
        </div>
    );
};

export default Home;