import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const main = () => {
    return (
        <div className='main-page'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default main;