import React from 'react';
import { Image } from 'react-bootstrap';
import logo from './errorPage.jpg'

const ErrorPage = () => {
    return (
        <div>
            <Image fluid src={logo}></Image>
        </div>
    );
};

export default ErrorPage;