import React from 'react';
import { Card } from 'react-bootstrap';

const Carts = ({ cart }) => {
    console.log(cart);
    const {logo, name, total } = cart;
    console.log(name)
    return (
        <Card>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <h3>Total Quiz: {total}</h3>
            </Card.Body>
        </Card>
    );
};

export default Carts;