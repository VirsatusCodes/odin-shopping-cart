import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import productList from '../products/productList.js';
import '../styling/generalStyling.css'
import HomePage from '../pages/HomePage';
import CataloguePage from '../pages/CataloguePage'
import Nav from '../components/NavBar'

const RouteSwitch = () => {
    return (
        <BrowserRouter>
                <Nav />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/Catalogue' element={<CataloguePage productList = {productList}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch