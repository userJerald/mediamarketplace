import React from 'react';
import { Route } from 'react-router-dom'

import Main from './Main'

export default class App extends React.Component{
    render(){
            return (
                <div>
                    <Route path='/' component={Main}/>
                </div>
                );
    }
}
