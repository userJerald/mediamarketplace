import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';

import { connect } from 'react-redux'
import Header from './Header';
import Home from './Home'
import Films from './Films'
import Search from './Search'
import Producer from './Producer'
import Login from './Login'
import Histories from './History'
import Help from './Help'

import '../styles/Homepage.css'
import { FilterAction } from '../action-reducer/action';

class Main extends React.Component{
    render(){
        const { AddText } = this.props 
            return (
                <div>
                    <div className='main-header'>
                    <Header />
                    </div>
                    <div className='main-body'>
                    <Switch>
                    <Route path='/home' component={Home}/>
                    <Route path='/films' component={Films}/>
                    <Route path='/search' component={Search}/>
                    <Route path='/producer' component={Producer}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/history' component={Histories}/>
                    <Route path='/help' component={Help}/>
                    </Switch>
                    </div>
                    <button onClick={() => {
                        AddText()
                    }} >Hello</button>
                </div>
                );
    }
}

function mapDispatchToProps(dispatch){
    return {
        AddText : () => dispatch(FilterAction.AddText())
    }
}


export default withRouter(connect(null, mapDispatchToProps)(Main));