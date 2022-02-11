import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import MyRoutes from './Routes/MyRoutes';
import Home from './Components/Home';

ReactDOM.hydrate(
    // <BrowserRouter>
    //   <MyRoutes/>
    // </BrowserRouter>,
    <Home />,

    document.querySelector('#root')
);