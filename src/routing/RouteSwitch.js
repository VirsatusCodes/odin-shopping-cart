import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import productList from '../products/productList.js';
import '../styling/generalStyling.css'
import HomePage from '../pages/HomePage';
import Nav from '../components/NavBar'

const RouteSwitch = () => {
    return (
        <BrowserRouter>
                <Nav />
            <Routes>
                {/* routes is what checks for exact matches but is still required */}
                <Route path='/' element={<HomePage productList = {productList}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch