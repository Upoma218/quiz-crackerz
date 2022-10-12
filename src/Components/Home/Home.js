import React from 'react';
import {  Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Carts from '../Carts/Carts';
import Statistics from '../Statistics/Statistics';
import logo from './heroImage.jpg'
import './Home.css'


const Home = () => {
    const logos = useLoaderData();
    const carts = logos.data;
    return (
        <div>
            <Container className='header-section '>
                <Row>
                    <Col xs={12} md={6}><Image thumbnail src={logo}></Image></Col>
                    <Col xs={12} md={6}>
                        <h1>Let't check your skill and join this assessment test!!</h1>
                        <p>If you want to run with this competitive world, you must have to be skilled!! You can join this skill checker mission and test your capability!! </p>
                    </Col>
                </Row>
            </Container>
            <Container className='p-6'>
                <Row xs={1} md={2} lg={4} className="g-4 ">
                    
                        {
                            carts.map(cart => <Carts key={cart.id} cart={cart}></Carts>)
                        }
                    
                </Row>
            </Container>
            
        </div>
    );
};

export default Home;