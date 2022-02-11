import React from 'react';
import {Switch, Route} from 'react-router';

import Home from '../Components/Home.js';

export default class MyRoutes extends React.Component{

    render(){
        return(
            <Switch>
                <Route path="/" render={props =>{
                    <Home {...props}/>
                }} />
            </Switch>
        )
    }

}
