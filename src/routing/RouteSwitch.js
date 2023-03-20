import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from '../App';

const RouteSwitch = ({productList}) => {
    return (
        <BrowserRouter>
            <Routes>
                {/* routes is what checks for exact matches but is still required */}
                <Route path='/' element={<App productList = {productList}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch