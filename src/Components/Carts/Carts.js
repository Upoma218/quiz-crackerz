import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './carts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Statistics from '../Statistics/Statistics';

const Carts = ({ cart }) => {
    
    const {id, logo, name, total } = cart;
    
    
    return (
        <Col>
        <Card className='cart'>
            <Card.Img variant="top bg-secondary" src={logo} />
            <Card.Body>
                <Card.Title className='text-info' ><h1>{name}</h1></Card.Title>
                <h2 className='text-success'>Total Quiz: {total}</h2>
                <Link to={`quiz/${id}`}><Button className='bg-secondary'>Start Practice<FontAwesomeIcon className='ms-2' icon={faArrowRight} /> </Button></Link>
            </Card.Body>
        </Card>
      
        </Col>

    );
};

export default Carts;