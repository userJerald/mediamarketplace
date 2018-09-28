import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

class AdminCont extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path = '/admin1' component = {NavComp} />
                    <Route path = '/admin2' component = {NavComp} />
                    <Route path = '/admin3' component = {NavComp} />
                    <Route path = '/admin4' component = {NavComp} />
                    <Route path = '/admin5' component = {NavComp} />
                    <Route component = {NoMatch} />
                </Switch>
            </div>
        );
    }
}

const NavComp = ({match}) => <h1>{match.url.substring(1, 2).toUpperCase() + match.url.substring(2)}</h1>;

const NoMatch = () => <Redirect to = '/admin1' />;

export default AdminCont;